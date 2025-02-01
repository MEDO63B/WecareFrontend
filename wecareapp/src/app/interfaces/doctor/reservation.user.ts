export interface IReservationCard{
    id: string,
    area: string,
    phone: string,
    doctor: {name: string, speciality: string}
}