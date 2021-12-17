
import pool from '../config/dbconnector';

class TaskController {
 
    public getTasks=(async (req: any, res: any):Promise<void>=> {
        try {
            const client = await  pool.connect();

            const sql = "SELECT * FROM tasks";
            const rows = await client.query(sql, (error: any, results: { rows: any; }) => {
                if (error) {
                  throw error
                }
                res.status(200).json(results.rows);
              });
            const tasks = rows;

            client.release();

            res.status(200).json(tasks)
        } catch (error) {
            res.status(400).send(error);
        }
    }
    );

    public getTaskById = (async (req: any, res: any):Promise<void>=> {
        const id = parseInt(req.params.id)
      
        try {
            const client =  pool.connect();

            const sql = "SELECT * FROM tasks WHERE id = $1";
            const rows = (await client).query(sql,[id], (error: any, results: { rows: any; }) => {
                if (error) {
                  throw error
                }
                res.status(200).json(results.rows)
              });
            const tasks = rows;

            (await client).release();

            res.status(200).json(tasks)
        } catch (error) {
            res.status(400).send(error);
        }

      }
);
    public postTask=(async (req: any, res: any):Promise<void>=> {
        const task = req.body;
       
        try {
            const client = await  pool.connect();

            const sql = "INSERT INTO tasks (id, referenceProjectId, label, bearbeiter, description, estimatedtime) VALUES ($1, $2, $3, $4, $5, $6)";
            const rows = (await client).query(sql,[task.id, task.referenceProjectId, task.label, task.bearbeiter, task.description, task.estimatedtime], (error: any, results: any) => {
                if (error) {
                  throw error
                }
                console.log(results);
                res.status(201).send(`Task added with ID: ${task.id}`)
              })
            const tasks = rows;

            client.release();
        } catch (error) {
            res.status(400).send(error);
        }
    });

    public putTask=(async (req: any, res: any):Promise<void>=> {
        const id = parseInt(req.params.id);
        const task = req.body;
        try {
            const client = await  pool.connect();

            const sql = "UPDATE tasks SET id=$1, referenceProjectId=$2, label=$3, bearbeiter=$4, description=$5, estimatedtime=$6 WHERE id = $7";
            const rows  = await client.query(sql,[task.id, task.referenceProjectId, task.label, task.bearbeiter, task.description, task.estimatedtime,task.id], (error: any, results: any) => {
                if (error) {
                  throw error
                }
                res.status(200).send(`User modified with ID: ${id}`)
              }
            )
            const tasks = rows;

            client.release();
        } catch (error) {
            res.status(400).send(error);
        }
    });

    public deleteTaskById=(async (req: any, res: any):Promise<void>=> {
        const id = parseInt(req.params.id);
        try {
            const client = await  pool.connect();

            const sql = "DELETE FROM users WHERE id = $1";
            const  rows  = await client.query(sql,[id], (error: any, results: any) => {
                if (error) {
                  throw error
                }
                res.status(200).send(`User deleted with ID: ${id}`)
              })
            const tasks = rows;

            client.release();

            res.status(200).send(`User deleted with ID: ${id}`);
        } catch (error) {
            res.status(400).send(error);
        }
    });
}

export default TaskController;