import { Injectable } from '@angular/core';
import { retry, Subject } from 'rxjs';
import { IClinicEdit } from 'src/app/interfaces/clinic/edit.clinic';
import { IClinicList } from 'src/app/interfaces/clinic/list.clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicFormService {

    mockData : IClinicList[] = [
        {
            id: '1',
            name: 'Clinic 1',
            area: 'Area 1',
            phone: '123-456-7890',
            'no. of reservation': 3
        },
        {
            id: '2',
            name: 'Clinic 2',
            area: 'Area 2',
            phone: '234-567-8901',
            'no. of reservation': 2
        },
        {
            id: '3',
            name: 'Clinic 3',
            area: 'Area 3',
            phone: '345-678-9012',
            'no. of reservation': 2
        },
        {
            id: '4',
            name: 'Clinic 4',
            area: 'Area 4',
            phone: '456-789-0123',
            'no. of reservation': 2
        },
        {
            id: '5',
            name: 'Clinic 5',
            area: 'Area 5',
            phone: '567-890-1234',
            'no. of reservation': 2
        },
        {
            id: '6',
            name: 'Clinic 6',
            area: 'Area 6',
            phone: '678-901-2345',
            'no. of reservation': 2
        },
        {
            id: '7',
            name: 'Clinic 7',
            area: 'Area 7',
            phone: '789-012-3456',
            'no. of reservation': 2
        },
        {
            id: '8',
            name: 'Clinic 8',
            area: 'Area 8',
            phone: '890-123-4567',
            'no. of reservation': 2
        },
        {
            id: '9',
            name: 'Clinic 9',
            area: 'Area 9',
            phone: '901-234-5678',
            'no. of reservation': 2
        },
        {
            id: '10',
            name: 'Clinic 10',
            area: 'Area 10',
            phone: '012-345-6789',
            'no. of reservation': 2
        },
        {
            id: '11',
            name: 'Clinic 11',
            area: 'Area 11',
            phone: '123-456-7891',
            'no. of reservation': 2
        },
        {
            id: '12',
            name: 'Clinic 12',
            area: 'Area 12',
            phone: '234-567-8902',
            'no. of reservation': 2
        },
        {
            id: '13',
            name: 'Clinic 13',
            area: 'Area 13',
            phone: '345-678-9013',
            'no. of reservation': 2
        },
        {
            id: '14',
            name: 'Clinic 14',
            area: 'Area 14',
            phone: '456-789-0124',
            'no. of reservation': 2
        },
        {
            id: '15',
            name: 'Clinic 15',
            area: 'Area 15',
            phone: '567-890-1235',
            'no. of reservation': 2
        },
        {
            id: '16',
            name: 'Clinic 16',
            area: 'Area 16',
            phone: '678-901-2346',
            'no. of reservation': 2
        },
        {
            id: '17',
            name: 'Clinic 17',
            area: 'Area 17',
            phone: '789-012-3457',
            'no. of reservation': 2
        },
        {
            id: '18',
            name: 'Clinic 18',
            area: 'Area 18',
            phone: '890-123-4568',
            'no. of reservation': 2
        },
        {
            id: '19',
            name: 'Clinic 19',
            area: 'Area 19',
            phone: '901-234-5679',
            'no. of reservation': 2
        },
        {
            id: '20',
            name: 'Clinic 20',
            area: 'Area 20',
            phone: '012-345-6780',
            'no. of reservation': 2
        },
    ];
    currentClinic: Subject<IClinicEdit> | undefined = new Subject<IClinicEdit>();
    
    constructor() { }

    setCurrentClinic(clinic: IClinicEdit) {
        console.log(clinic);
        this.currentClinic?.next(clinic);
    }
}
