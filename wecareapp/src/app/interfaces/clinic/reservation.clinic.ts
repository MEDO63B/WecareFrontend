import { IDoctorReservationCard } from "../doctor/reservation.user";

export interface IDoctorReservation {
  details?: ReservationDetails[];
  doctor?: IDoctorReservationCard;
}

export interface ReservationDetails {
  id?: string;
  time?: string;
  date?: string;
  status?: ReservationStatusType;
}
export enum ReservationStatusType {
  'Reserve' = 'Reserve',
  'Cancel' = 'Cancel',
  'Checkin' = 'Checkin',
  'Reserved' = 'Reserved',
}
