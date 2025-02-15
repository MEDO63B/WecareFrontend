import { Injectable } from '@angular/core';
import { IReservationCard } from 'src/app/interfaces/doctor/reservation.user';

@Injectable({
  providedIn: 'root'
})
export class ReservationDoctorService {

  mockData: IReservationCard[] = [
    {id: '1', area: 'Cairo', doctor: {name: 'Dr. Mohamed Ali', speciality: 'Cardiologist'}, phone: '1015166600'},
    {id: '2', area: 'Giza', doctor: {name: 'Dr. John Doe', speciality: 'Dermatologist'}, phone: '1015166601'},
    {id: '3', area: 'Alexandria', doctor: {name: 'Dr. Jane Smith', speciality: 'Neurologist'}, phone: '1015166602'},
    {id: '4', area: 'Mansoura', doctor: {name: 'Dr. Ahmed Mohamed', speciality: 'Orthopedic surgeon'}, phone: '1015166603'},
    {id: '5', area: 'Tanta', doctor: {name: 'Dr. Sara Ali', speciality: 'Gynecologist'}, phone: '1015166604'},
    {id: '6', area: 'Port Said', doctor: {name: 'Dr. Mohamed Hassan', speciality: 'Urologist'}, phone: '1015166605'},
    {id: '7', area: 'Suez', doctor: {name: 'Dr. Omar Abdel-Rahman', speciality: 'Nephrologist'}, phone: '1015166606'},
    {id: '8', area: 'Ismaelia', doctor: {name: 'Dr. Hesham Mohamed', speciality: 'Radiologist'}, phone: '1015166607'},
    {id: '9', area: 'Damanhour', doctor: {name: 'Dr. Mohamed El-Sayed', speciality: 'Ophthalmologist'}, phone: '1015166608'},
    {id: '10', area: 'Kafr El-Sheikh', doctor: {name: 'Dr. Mona Shaker', speciality: 'Pathologist'}, phone: '1015166609'},
    {id: '11', area: 'Zagazig', doctor: {name: 'Dr. Ahmed El-Sayed', speciality: 'Anesthesiologist'}, phone: '1015166610'},
    {id: '12', area: 'Damietta', doctor: {name: 'Dr. Fatma El-Zahraa', speciality: 'Neurosurgeon'}, phone: '1015166611'},
    {id: '13', area: 'El-Mahalla El-Kubra', doctor: {name: 'Dr. Ahmed Shawky', speciality: 'General Surgeon'}, phone: '1015166612'},
    {id: '14', area: 'Tanta', doctor: {name: 'Dr. Shereen El-Sayed', speciality: 'Pediatrician'}, phone: '1015166613'},
    {id: '15', area: 'Mansoura', doctor: {name: 'Dr. Mohamed Abdel-Rahman', speciality: 'Oncologist'}, phone: '1015166614'},
    {id: '16', area: 'Cairo', doctor: {name: 'Dr. Ahmed El-Sayed', speciality: 'Dermatopathologist'}, phone: '1015166615'},
    {id: '17', area: 'Giza', doctor: {name: 'Dr. Mona Shaker', speciality: 'Hematologist'}, phone: '1015166616'},
    {id: '18', area: 'Alexandria', doctor: {name: 'Dr. Mohamed Hassan', speciality: 'Pulmonologist'}, phone: '1015166617'},
    {id: '19', area: 'Port Said', doctor: {name: 'Dr. Sara Ali', speciality: 'Endocrinologist'}, phone: '1015166618'},
    {id: '20', area: 'Suez', doctor: {name: 'Dr. Omar Abdel-Rahman', speciality: 'Cardiothoracic surgeon'}, phone: '1015166619'},
  ]
  constructor() { }

}
