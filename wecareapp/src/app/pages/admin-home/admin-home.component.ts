import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserList } from 'src/app/interfaces/user/list.user';
import { SearchService } from 'src/app/services/search/search-service.service';
import { Subscription } from 'rxjs';
import { IDataTableAction } from 'src/app/interfaces/table/data.table';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit, OnDestroy {

    labels : string[] = ['id', 'name', 'speciality', 'action'];
    data: IUserList[] = [
        { id: '1', name: 'John Doe', speciality: 'Cardiologist'   },
        { id: '2', name: 'Jane Doe', speciality: 'Dentist'  },
        { id: '3', name: 'Bob Smith', speciality: 'Surgeon'  },
        { id: '4', name: 'Alice Johnson', speciality: 'Neurologist'  },
        { id: '5', name: 'Mike Brown', speciality: 'Orthopedic'  },
        { id: '6', name: 'Emily Davis', speciality: 'Dermatologist'  },
        { id: '7', name: 'Sarah Lee', speciality: 'Obstetrician'  },
        { id: '8', name: 'Kevin White', speciality: 'Ophthalmologist'  },
        { id: '9', name: 'Lisa Nguyen', speciality: 'Oncologist'  },
        { id: '10', name: 'David Hall', speciality: 'Pediatrician'  },
        { id: '11', name: 'Karen Martin', speciality: 'Psychiatrist'  },
        { id: '12', name: 'Richard King', speciality: 'Radiologist'  },
        { id: '13', name: 'Heather Taylor', speciality: 'Urologist'  },
        { id: '14', name: 'Brian Walker', speciality: 'Gastroenterologist'  },
        { id: '15', name: 'Laura Harris', speciality: 'Hematologist'  },
        { id: '16', name: 'Douglas Jackson', speciality: 'Immunologist'  },
        { id: '17', name: 'Carolyn Lewis', speciality: 'Infectious Disease'  },
        { id: '18', name: 'Roger Morgan', speciality: 'Nephrologist'  },
        { id: '19', name: 'Pamela Nelson', speciality: 'Neurosurgeon'  },
        { id: '20', name: 'Raymond Oliver', speciality: 'Otolaryngologist'  }
    ]; 
    
    tempData: IUserList[] = this.data;
    action: IDataTableAction; 
    deleteHandler = (id: any) => {
        console.log(`User Delete: ${id}`);
        console.log(id);
    }
    searchSub: Subscription;
    constructor(private searchService: SearchService) {
        
        this.action = { actionType: 'Delete', actionCallBack: this.deleteHandler };

        this.searchSub = this.searchService.searchTerm.subscribe(val => {
          this.data = this.tempData.filter(item =>
              item.name.toLowerCase().includes(val.toLowerCase())
              || item.speciality.toLowerCase().includes(val.toLowerCase())
              || item.id.toLowerCase().includes(val.toLowerCase())
          );
      })
   }
    ngOnDestroy(): void {
        if(this.searchSub)
            this.searchSub.unsubscribe();
    }

  ngOnInit() {
  }

}
