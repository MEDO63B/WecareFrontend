import { IClinicEdit } from "./edit.clinic";


export interface IClinicSchedule {
  schudle: ISchedule[];
  clinic: IClinicEdit;
  reserver?: IReserver[];
}

export interface ISchedule{
    id?: string;
    time?: string;
    date?: string;

}

export interface IReserver
{
    id?: string;
    name?: string;
    description?: string;

}
