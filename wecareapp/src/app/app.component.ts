import { Component, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { SearchService } from './services/search/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'wecareapp';
  constructor(private searchService: SearchService)
  {
      this.searchService.searchTerm.subscribe(val => {
          console.log("val: ",val);
      });
  }
    ngOnDestroy(): void {
        this.searchService.searchTerm.unsubscribe();
    }
//   data = {
//     labels: [
//       'Users',
//       'Doctors'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [300, 50],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)'
//       ],
//       hoverOffset: 2
//     }]
//   };
}
