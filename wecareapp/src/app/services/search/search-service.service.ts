import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    searchTerm = new Subject<string>();
    constructor() { }
    search(searchText: string)
    {
        this.searchTerm.next(searchText);
    }

}
