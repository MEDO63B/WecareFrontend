export interface IReservationCard{
    id: string,
    area: string,
    phone: string,
    doctor: {name: string, speciality: string, id?:string}
}
export interface IDoctorReservationCard{
    id: string,
    name: string,
    speciality: string,
}
