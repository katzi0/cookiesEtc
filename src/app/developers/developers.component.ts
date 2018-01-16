import {Component, OnInit} from '@angular/core';
import {Developer} from '../models/developr.model';
import {DeveloperService} from '../developer.service';
import {MesseagesService} from '../messeages.service';
import {DeveloperListState, DeveloperState} from '../store/developer/developer.state';

import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as DeveloperAction from '../store/developer/developer.action';


export interface AppState {

  developers: DeveloperListState;

}


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
  // providers: [DeveloperService]
})




export class DevelopersComponent implements OnInit {

  developers: Developer[];
  developerListState$: Observable<DeveloperState[]>;

  constructor(
    private developerService: DeveloperService,
    private messeagesService: MesseagesService,
    private store: Store<DeveloperListState>
  ) {
    this.store.dispatch(new DeveloperAction.LoadDevelopers());
  }

  ngOnInit() {

    this.developerListState$ = this.store.select(state => state.developers);
    this.store.dispatch(new DeveloperAction.LoadDevelopers());


    this.developerService.getDevelopers()
      .subscribe(developers => this.developers = developers);


  }

  add(developerName: string) {
    //todo: add developer dispatch
    developerName = developerName.trim();
    if (!developerName) {
      return;
    }
    this.developerService.addDeveloper({name: developerName} as Developer)
      .subscribe(developer => {
        this.developers.push(developer);

      });
  }

  delete(developer: Developer) {
    this.developers = this.developers.filter(dev => dev !== developer);
    this.developerService.deleteDeveloper(developer)
      .subscribe();
  }

}
