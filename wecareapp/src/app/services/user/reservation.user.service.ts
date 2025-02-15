import { Injectable } from '@angular/core';
import { IReservationDataRecord } from '../../interfaces/user/reservation.user';
@Injectable({
  providedIn: 'root'
})
export class ReservationUserService {

  mockData: IReservationDataRecord[] = [
    {
      id: '1',
      area: 'Bangsue',
      clinicName: 'Bangkok Hospital',
      time: '08:00',
      date: '2022-10-10',
    },
    {
      id: '2',
      area: 'Ratchada',
      clinicName: 'Bumrungrad International Hospital',
      time: '13:00',
      date: '2022-10-12',
    },
    {
      id: '3',
      area: 'Sukhumvit',
      clinicName: 'Samitivej Sukhumvit Hospital',
      time: '10:00',
      date: '2022-10-15',
    },
    {
      id: '4',
      area: 'Phaya Thai',
      clinicName: 'Phyathai 2 Hospital',
      time: '16:00',
      date: '2022-10-18',
    },
    {
      id: '5',
      area: 'Thonglor',
      clinicName: 'Bangkok Hospital Thonglor',
      time: '11:00',
      date: '2022-10-20',
    },
    {
      id: '6',
      area: 'Pathumwan',
      clinicName: 'Pathumwan Hospital',
      time: '13:00',
      date: '2022-10-21',
    },
    {
      id: '7',
      area: 'Chatuchak',
      clinicName: 'Chatuchak Hospital',
      time: '10:00',
      date: '2022-10-23',
    },
    {
      id: '8',
      area: 'Rama',
      clinicName: 'Rama Hospital',
      time: '16:00',
      date: '2022-10-25',
    },
    {
      id: '9',
      area: 'Saphan Lueng',
      clinicName: 'Saphan Lueng Hospital',
      time: '11:00',
      date: '2022-10-27',
    },
    {
      id: '10',
      area: 'Sathon',
      clinicName: 'Sathon Hospital',
      time: '13:00',
      date: '2022-10-28',
    },
    {
      id: '11',
      area: 'Bangkapi',
      clinicName: 'Bangkapi Hospital',
      time: '10:00',
      date: '2022-10-30',
    },
    {
      id: '12',
      area: 'Huamark',
      clinicName: 'Huamark Hospital',
      time: '16:00',
      date: '2022-10-31',
    },
    {
      id: '13',
      area: 'Klong Toey',
      clinicName: 'Klong Toey Hospital',
      time: '11:00',
      date: '2022-11-01',
    },
    {
      id: '14',
      area: 'Phra Khanong',
      clinicName: 'Phra Khanong Hospital',
      time: '13:00',
      date: '2022-11-02',
    },
    {
      id: '15',
      area: 'Wangthonglang',
      clinicName: 'Wangthonglang Hospital',
      time: '10:00',
      date: '2022-11-03',
    },
    {
      id: '16',
      area: 'Khlong Sam Wa',
      clinicName: 'Khlong Sam Wa Hospital',
      time: '16:00',
      date: '2022-11-04',
    },
    {
      id: '17',
      area: 'Bang Khen',
      clinicName: 'Bang Khen Hospital',
      time: '11:00',
      date: '2022-11-05',
    },
    {
      id: '18',
      area: 'Don Mueang',
      clinicName: 'Don Mueang Hospital',
      time: '13:00',
      date: '2022-11-06',
    },
    {
      id: '19',
      area: 'Lak Si',
      clinicName: 'Lak Si Hospital',
      time: '10:00',
      date: '2022-11-07',
    },
    {
      id: '20',
      area: 'Chatuchak',
      clinicName: 'Chatuchak Hospital',
      time: '16:00',
      date: '2022-11-08',
    },
  ];
  constructor() { }

}
