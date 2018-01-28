import {Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {Developer} from '../../models/developr.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DeveloperService} from '../../services/developer.service';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {Store} from '@ngrx/store';

import * as DeveloperAction from '../../store/developer/developer.action';

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
  @Input() developer: Developer;
  welcomeMsg = '--not initalized yet--';
  unsubscribe: Subject<any> = new Subject<any>();

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
    this.developerService.getDeveloper(id)
      .pipe(
        takeUntil(this.unsubscribe),
        tap(_ => this.developerService.log(`updated developer id = ${id}`))
      )
      .subscribe(developer => this.developer = developer);
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
}
