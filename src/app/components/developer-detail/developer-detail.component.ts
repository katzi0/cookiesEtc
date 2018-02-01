import {Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {Developer} from '../../models/developr.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DeveloperService} from '../../services/developer.service';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {Store} from '@ngrx/store';

import * as DeveloperAction from '../../store/developer/developer.action';
import {Observable} from 'rxjs/Observable';

interface AppState {
  developers: {
    showLoader: boolean,
    status: string
  };
}

@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class DeveloperDetailComponent implements OnInit, OnDestroy {
  developer: Developer;
  welcomeMsg = '--not initalized yet--';
  unsubscribe: Subject<any> = new Subject<any>();
  developerObs: Observable<Developer>;

  constructor(private route: ActivatedRoute,
              private developerService: DeveloperService,
              private location: Location,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.getDeveloper();
    this.welcomeMsg = this.developer ?
      `welcome, ${this.developer.name}` : `welcome unknown`;
  }

  getDeveloper() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerObs = this.developerService.getDeveloper(id);
    this.developerObs
      .pipe(
        takeUntil(this.unsubscribe),
        tap(_ => this.developerService.log(`updated developer id = ${id}`))
      )
      .subscribe(developer => {
        this.developer = developer,
          this.welcomeMsg = `Welcome ${this.developer.name}`,
          console.log(this.developer);
      });
    this.getCurrectUrl();
    this.store.dispatch(new DeveloperAction.LoadDeveloper());
  }

  goBack() {
    this.location.back();
  }

  saveDeveloper() {
    this.developerService.updateDeveloper(this.developer).subscribe(() => this.goBack());
  }

  getCurrectUrl() {
    console.log('Url:' + this.route.url);
    return this.route.url;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  updateDataTest() {
    console.log(this.developer.name)
    this.developerService.saveDeveloperTest(this.developer);

    // this.developerService.saveDeveloperTest(this.developer).subscribe(x => console.log(x));
  }
}
