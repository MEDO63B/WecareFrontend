import { Component, OnDestroy, OnInit } from '@angular/core';
import { IReportList } from 'src/app/interfaces/report/list.report';
import { SearchService } from 'src/app/services/search/search-service.service';
import { Subscription } from 'rxjs';
import { IDataTableAction } from 'src/app/interfaces/table/data.table';
@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit, OnDestroy {

    labels = ['id', 'email', 'description', 'action'];
    data : IReportList[] = [
        { id: '1', email: 'pat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '2', email: 'cat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '3', email: 'bat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '4', email: 'aat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '5', email: 'dat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '6', email: 'eat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '7', email: 'fat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '8', email: 'gat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '9', email: 'hat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '10', email: 'iat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '11', email: 'jat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '12', email: 'kat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '13', email: 'lat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '14', email: 'mat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '15', email: 'nat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '16', email: 'oat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '17', email: 'pat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '18', email: 'qat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '19', email: 'rat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
        { id: '20', email: 'sat@example.com', description: 'I have a Problem With Sign up as Doctor'  },
    ];
    tempData: IReportList[] = this.data;
    searchSub: Subscription;
    
    action: IDataTableAction = {
        actionType: 'Delete',
        actionCallBack: [this.deleteHandler]
    }

    deleteHandler(id: string) { console.log(`Delete: ${id}`); }

    constructor(private searchService: SearchService) {
        

        this.searchSub = this.searchService.searchTerm.subscribe((searchText: string) => 
        {
            this.data = this.tempData.filter(item => item.description.toLowerCase().includes(searchText.toLowerCase()) || item.email.toLowerCase().includes(searchText.toLowerCase())
            );
        });

    }
    ngOnDestroy(): void {
        if (this.searchSub)
            this.searchSub.unsubscribe();
    }

    ngOnInit() {
    }

}
