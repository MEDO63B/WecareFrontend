import { Injectable } from '@angular/core';
import { IDoctorReservation, ReservationStatusType } from 'src/app/interfaces/clinic/reservation.clinic';

@Injectable({
  providedIn: 'root'
})
export class ReservationClinicService {

  mockData : IDoctorReservation[] = [
    {
      details: [
        {
          id: '1',
          date: '2022-01-01',
          time: '10:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '2',
          date: '2022-01-01',
          time: '11:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '3',
          date: '2022-01-01',
          time: '12:00',
          status: ReservationStatusType.Cancel
        },
        {
          id: '4',
          date: '2022-01-01',
          time: '13:00',
          status: ReservationStatusType.Reserved
        }
      ],
      doctor: {
        id: '1',
        name: 'Dr. Mohamed Ali',
        speciality: 'Cardiologist'
      }
    },
    {
      details: [
        {
          id: '5',
          date: '2022-01-01',
          time: '14:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '6',
          date: '2022-01-01',
          time: '15:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '7',
          date: '2022-01-01',
          time: '16:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '8',
          date: '2022-01-01',
          time: '17:00',
          status: ReservationStatusType.Cancel
        }
      ],
      doctor: {
        id: '2',
        name: 'Dr. John Doe',
        speciality: 'Dermatologist'
      }
    },
    {
      details: [
        {
          id: '9',
          date: '2022-01-01',
          time: '18:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '10',
          date: '2022-01-01',
          time: '19:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '11',
          date: '2022-01-01',
          time: '20:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '12',
          date: '2022-01-01',
          time: '21:00',
          status: ReservationStatusType.Cancel
        }
      ],
      doctor: {
        id: '3',
        name: 'Dr. Jane Smith',
        speciality: 'Neurologist'
      }
    },
    {
      details: [
        {
          id: '13',
          date: '2022-01-02',
          time: '09:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '14',
          date: '2022-01-02',
          time: '10:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '15',
          date: '2022-01-02',
          time: '11:00',
          status: ReservationStatusType.Cancel
        },
        {
          id: '16',
          date: '2022-01-02',
          time: '12:00',
          status: ReservationStatusType.Reserved
        }
      ],
      doctor: {
        id: '4',
        name: 'Dr. Ahmed Mohamed',
        speciality: 'Orthopedic surgeon'
      }
    },
    {
      details: [
        {
          id: '17',
          date: '2022-01-02',
          time: '13:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '18',
          date: '2022-01-02',
          time: '14:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '19',
          date: '2022-01-02',
          time: '15:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '20',
          date: '2022-01-02',
          time: '16:00',
          status: ReservationStatusType.Cancel
        }
      ],
      doctor: {
        id: '5',
        name: 'Dr. Sara Ali',
        speciality: 'Gynecologist'
      }
    },
    {
      details: [
        {
          id: '21',
          date: '2022-01-02',
          time: '17:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '22',
          date: '2022-01-02',
          time: '18:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '23',
          date: '2022-01-02',
          time: '19:00',
          status: ReservationStatusType.Cancel
        },
        {
          id: '24',
          date: '2022-01-02',
          time: '20:00',
          status: ReservationStatusType.Reserved
        }
      ],
      doctor: {
        id: '6',
        name: 'Dr. Omar Abdel-Rahman',
        speciality: 'Nephrologist'
      }
    },
    {
      details: [
        {
          id: '25',
          date: '2022-01-03',
          time: '09:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '26',
          date: '2022-01-03',
          time: '10:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '27',
          date: '2022-01-03',
          time: '11:00',
          status: ReservationStatusType.Cancel
        },
        {
          id: '28',
          date: '2022-01-03',
          time: '12:00',
          status: ReservationStatusType.Reserved
        }
      ],
      doctor: {
        id: '7',
        name: 'Dr. Hesham Mohamed',
        speciality: 'Radiologist'
      }
    },
    {
      details: [
        {
          id: '29',
          date: '2022-01-03',
          time: '13:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '30',
          date: '2022-01-03',
          time: '14:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '31',
          date: '2022-01-03',
          time: '15:00',
          status: ReservationStatusType.Cancel
        },
        {
          id: '32',
          date: '2022-01-03',
          time: '16:00',
          status: ReservationStatusType.Reserved
        }
      ],
      doctor: {
        id: '8',
        name: 'Dr. Mona Shaker',
        speciality: 'Pathologist'
      }
    },
    {
      details: [
        {
          id: '33',
          date: '2022-01-03',
          time: '17:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '34',
          date: '2022-01-03',
          time: '18:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '35',
          date: '2022-01-03',
          time: '19:00',
          status: ReservationStatusType.Cancel
        },
        {
          id: '36',
          date: '2022-01-03',
          time: '20:00',
          status: ReservationStatusType.Reserved
        }
      ],
      doctor: {
        id: '9',
        name: 'Dr. Fatma El-Zahraa',
        speciality: 'Neurosurgeon'
      }
    },
    {
      details: [
        {
          id: '37',
          date: '2022-01-04',
          time: '09:00',
          status: ReservationStatusType.Reserve
        },
        {
          id: '38',
          date: '2022-01-04',
          time: '10:00',
          status: ReservationStatusType.Reserved
        },
        {
          id: '39',
          date: '2022-01-04',
          time: '11:00',
          status: ReservationStatusType.Cancel
        },
        {
          id: '40',
          date: '2022-01-04',
          time: '12:00',
          status: ReservationStatusType.Reserved
        }
      ],
      doctor: {
        id: '10',
        name: 'Dr. Ahmed El-Sayed',
        speciality: 'Anesthesiologist'
      }
    }

  ]
  constructor() { }

}
