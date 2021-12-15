import { ActivityModel } from "./activity.model";

export interface TaskModel {
    id: number;
    label:string;
    firma:string;
    times?: ActivityModel[];
    estimatedTime?:Date;
    referenceProjectId?:number;
    bearbeiter: string;
    description:string;
}