import {
    Router
} from 'express';
import { ProjektModel } from '../models/projekt.model';

const projekteRouter = Router();

let projekte: ProjektModel[] = [{
        id: 1,
        name:"Erstes Projekt",
        firma:"Erste Firma",
        anzahlMitarbeiter:5,
        referenceProjectId:1,
    },
    {
        id: 2,
        name:"Zweites Projekt",
        firma:"Zweite Firma",
        anzahlMitarbeiter:2,
        referenceProjectId:1
    },
];

projekteRouter.get('/', (req: any, res: any) => {
    res.send(projekte)
})

projekteRouter.get('/:id', (req: any, res: any) => {
    let id = req.params.id;
    console.log(req.params.id);
    for (let projekt of projekte) {
        if (projekt.id == id) {
            res.send(projekt)
        }
    }
    res.send("klappt halt nicht was du vorhast");
})

projekteRouter.delete('/:id', (req: any, res: any) => {
    let id = req.params.id;
    for (let projekt of projekte) {
        if (projekt.id == id) {
            let index = projekte.indexOf(projekt);

            projekte.splice(index, 1);
            res.send(projekte);
        }
    }
    res.send("klappt halt nicht was du vorhast");
})

projekteRouter.post('/', (req: any, res: any) => {
    let projekt = req.body;
    projekte.push(projekt);
    res.send(projekt);
})

projekteRouter.put('/:id', (req: any, res: any) => {
    let id = req.params.id;
    let incomingProjekt = req.body;
    for (let projekt of projekte) {
        if (projekt.id == id) {
            let index = projekte.indexOf(projekt);

            projekte[index] = incomingProjekt;
            res.send(projekte);
        }
    }
})

export default projekteRouter;