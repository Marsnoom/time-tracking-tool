import bodyParser from 'body-parser';
import express from 'express';
import pool from './config/dbconnector';
import tasksRouter from './routes/task.routes';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err.message);
            console.log('Connected');
          }); 
    }

    private routerConfig() {
        this.app.use('/tasks', tasksRouter);
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;