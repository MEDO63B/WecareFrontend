import { Injectable } from '@angular/core';
import { IClinicSchedule } from 'src/app/interfaces/clinic/schedule.clinic';

@Injectable({
  providedIn: 'root',
})
export class ScheduleClinicService {
  mockData: IClinicSchedule[] = [
  {
    clinic: {
      id: '1',
      name: 'Clinic 1',
      area: 'Area 1',
      phone: '123-456-7890',
    },
    schudle: [
      { id: '1', date: '2022-01-01', time: '08:00' },
      { id: '2', date: '2022-01-03', time: '09:00' },
      { id: '3', date: '2022-01-04', time: '10:00' },
      { id: '4', date: '2022-01-05', time: '11:00' },
      { id: '5', date: '2022-01-06', time: '12:00' },
      { id: '6', date: '2022-01-07', time: '13:00' },
      { id: '7', date: '2022-01-08', time: '14:00' },
      { id: '8', date: '2022-01-09', time: '15:00' },
      { id: '9', date: '2022-01-10', time: '16:00' },
      { id: '10', date: '2022-01-11', time: '17:00' },
    ],
    reserver: [
      { id: '1', name: 'John Doe', description: 'Regular check-up' },
      { id: '2', name: 'Jane Smith', description: 'Follow-up appointment' },
      { id: '3', name: 'Alice Brown', description: 'Consultation' },
      { id: '4', name: 'Bob Johnson', description: 'New patient' },
      { id: '5', name: 'Charlie Green', description: 'Annual physical' },
      { id: '6', name: 'Dave White', description: 'Vaccination' },
      { id: '7', name: 'Eva Black', description: 'Routine check' },
      { id: '8', name: 'Frank Blue', description: 'Specialist referral' },
      { id: '9', name: 'George Red', description: 'Wellness exam' },
      { id: '10', name: 'Helen Yellow', description: 'Medical history review' },
    ],
  },
  {
    clinic: {
      id: '2',
      name: 'Clinic 2',
      area: 'Area 2',
      phone: '234-567-8901',
    },
    schudle: [
      { id: '11', date: '2022-01-01', time: '08:00' },
      { id: '12', date: '2022-01-03', time: '09:00' },
      { id: '13', date: '2022-01-04', time: '10:00' },
      { id: '14', date: '2022-01-05', time: '11:00' },
      { id: '15', date: '2022-01-06', time: '12:00' },
      { id: '16', date: '2022-01-07', time: '13:00' },
      { id: '17', date: '2022-01-08', time: '14:00' },
      { id: '18', date: '2022-01-09', time: '15:00' },
      { id: '19', date: '2022-01-10', time: '16:00' },
      { id: '20', date: '2022-01-11', time: '17:00' },
    ],
    reserver: [
      { id: '11', name: 'Igor Orange', description: 'Allergy treatment' },
      { id: '12', name: 'Julia Purple', description: 'Dermatology consultation' },
    ],
  },
  {
    clinic: {
      id: '3',
      name: 'Clinic 3',
      area: 'Area 3',
      phone: '345-678-9012',
    },
    schudle: [
      { id: '21', date: '2022-01-01', time: '08:00' },
      { id: '22', date: '2022-01-03', time: '09:00' },
      { id: '23', date: '2022-01-04', time: '10:00' },
      { id: '24', date: '2022-01-05', time: '11:00' },
      { id: '25', date: '2022-01-06', time: '12:00' },
      { id: '26', date: '2022-01-07', time: '13:00' },
      { id: '27', date: '2022-01-08', time: '14:00' },
      { id: '28', date: '2022-01-09', time: '15:00' },
      { id: '29', date: '2022-01-10', time: '16:00' },
      { id: '30', date: '2022-01-11', time: '17:00' },
    ],
    reserver: [
      { id: '13', name: 'Karen Pink', description: 'Prenatal care' },
      { id: '14', name: 'Laura Turquoise', description: 'Medical imaging' },
    ],
  },
  {
    clinic: {
      id: '4',
      name: 'Clinic 4',
      area: 'Area 4',
      phone: '456-789-0123',
    },
    schudle: [
      { id: '31', date: '2022-01-01', time: '08:00' },
      { id: '32', date: '2022-01-03', time: '09:00' },
      { id: '33', date: '2022-01-04', time: '10:00' },
      { id: '34', date: '2022-01-05', time: '11:00' },
      { id: '35', date: '2022-01-06', time: '12:00' },
      { id: '36', date: '2022-01-07', time: '13:00' },
      { id: '37', date: '2022-01-08', time: '14:00' },
      { id: '38', date: '2022-01-09', time: '15:00' },
      { id: '39', date: '2022-01-10', time: '16:00' },
      { id: '40', date: '2022-01-11', time: '17:00' },
    ],
    reserver: [
      { id: '15', name: 'Mike Silver', description: 'Surgical consultation' },
      { id: '16', name: 'Nina Gold', description: 'Orthopedic evaluation' },
    ],
  },
  {
    clinic: {
      id: '5',
      name: 'Clinic 5',
      area: 'Area 5',
      phone: '567-890-1234',
    },
    schudle: [
      { id: '41', date: '2022-01-01', time: '08:00' },
      { id: '42', date: '2022-01-03', time: '09:00' },
      { id: '43', date: '2022-01-04', time: '10:00' },
      { id: '44', date: '2022-01-05', time: '11:00' },
      { id: '45', date: '2022-01-06', time: '12:00' },
      { id: '46', date: '2022-01-07', time: '13:00' },
      { id: '47', date: '2022-01-08', time: '14:00' },
      { id: '48', date: '2022-01-09', time: '15:00' },
      { id: '49', date: '2022-01-10', time: '16:00' },
      { id: '50', date: '2022-01-11', time: '17:00' },
    ],
    reserver: [
      { id: '17', name: 'Olivia Copper', description: 'Neurology consultation' },
      { id: '18', name: 'Peter Bronze', description: 'Dermatology follow-up' },
    ],
  },
];
constructor() {}
}

