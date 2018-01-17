import {Component, OnInit} from '@angular/core';
import {Developer} from '../../models/developr.model';
import {DeveloperService} from '../../services/developer.service';
import {MesseagesService} from '../../services/messeages.service';
// import {DeveloperListState, DeveloperState} from '../../store/developer/developer.state';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as DeveloperAction from '../../store/developer/developer.action';
import {DeveloperState} from '../../store/developer/developer.reducer';

// import {selectLoading} from '../../store/loader/loader.reducer';


interface AppState {
  developers: {
    showLoader: boolean,
    status: string
  };
}


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
  // providers: [DeveloperService]
})


export class DevelopersComponent implements OnInit {
  res: string;
  message$: Observable<any>;
  developerToAdd: Developer;
  developers: Developer[];
  developers$: Observable<Developer[]>;


  constructor(private developerService: DeveloperService,
              private messeagesService: MesseagesService,
              private store: Store<AppState>) {
    this.message$ = this.store.select('developers');
    this.message$.subscribe(x => {
      this.res = x.status,
     console.log(x);
    });
  }

  ngOnInit() {

    // this.developerListState$ = this.store.select(state => state.developers);
    this.store.dispatch(new DeveloperAction.LoadDevelopers());
    // this.showLoader = this.store.select(state => (state.showLoader,console.log(state)));

    this.developerService.getDevelopers()
      .subscribe(developers => this.developers = developers);
  }

  add(developerName: string) {
    developerName = developerName.trim();
    if (!developerName) {
      return;
    }

    this.developerToAdd = {
      name: developerName,
      location: {name: `Tel Aviv`, latitude: 32.0852999, longitude: 34.78176759999997}
    };

    this.store.dispatch(new DeveloperAction.AddDeveloper(this.developerToAdd));

    this.developerService.addDeveloper(
      this.developerToAdd as Developer)
      .subscribe(developer => {
        console.log(developer);
      });
  }

  delete(developer: Developer) {
    this.developers = this.developers.filter(dev => dev !== developer);
    this.developerService.deleteDeveloper(developer)
      .subscribe();
  }

}
