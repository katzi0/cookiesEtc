import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { DeveloperService } from '../developer.service';
import { Developer } from '../developr';


@Component({
  selector: 'app-developer-search',
  templateUrl: './developer-search.component.html',
  styleUrls: ['./developer-search.component.css']
})
export class DeveloperSearchComponent implements OnInit {
  developers$ : Observable<Developer[]>;
  private searchTerms = new Subject<string>();

  constructor(private developerService:DeveloperService) { }

  search(term:string){
    this.searchTerms.next(term);
  }

  ngOnInit():void {
    this.developers$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.developerService.searchDevelopers(term))
    )
  }



}
