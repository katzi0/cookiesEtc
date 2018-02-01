import {Component, OnDestroy, OnInit} from '@angular/core';
import {Developer} from '../../models/developr.model';
import {DeveloperService} from '../../services/developer.service';
import {MesseagesService} from '../../services/messeages.service';
// import {DeveloperListState, DeveloperState} from '../../store/developer/developer.state';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as DeveloperAction from '../../store/developer/developer.action';
import {DeveloperState} from '../../store/developer/developer.reducer';

// import {selectLoading} from '../../store/loader/loader.reducer';

import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

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


export class DevelopersComponent implements OnInit, OnDestroy {
  showLoader: Boolean = false;
  res: string;
  message$: Observable<any>;
  developerToAdd: Developer;
  developers: Developer[];
  developers$: Observable<Developer[]>;
  unsubscribe: Subject<any> = new Subject<any>();

  constructor(private developerService: DeveloperService,
              private messeagesService: MesseagesService,
              private store: Store<AppState>) {
    this.message$ = this.store.select('developers');
    this.message$.subscribe(x => {
      this.res = x.status,
        console.log(x),
        this.showLoader = x.showLoader;
    });
  }

  ngOnInit() {
    this.developerService.getDevelopers()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(developers => this.developers = developers);
    this.store.dispatch(new DeveloperAction.LoadDevelopers());
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

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
