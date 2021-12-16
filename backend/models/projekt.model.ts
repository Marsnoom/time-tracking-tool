import { TaskModel } from "./task.model";

export interface ProjektModel {
    id: number;
    name:string;
    firma:string;
    anzahlMitarbeiter:number;
    tasks?: TaskModel[];
    estimatedTime?:Date;
    referenceProjectId:number;
}