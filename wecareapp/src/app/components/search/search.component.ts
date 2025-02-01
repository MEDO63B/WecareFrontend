import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit
{
    search(searchBar: string)
    {
        this.searchService.search(searchBar);
    }


    constructor(private searchService: SearchService) { }

    ngOnInit() {}

}
