import {DeveloperState} from './developer.state';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';

import * as DeveloperActions from './developer.action';

import {HttpClient} from '@angular/common/http';
import {LoaderActions, ToggleLoader} from '../loader/loader.action';
import {MesseagesService} from '../../services/messeages.service';
import {LoadMessages} from '../messages/messages.action';
import {LoadDevelopers, LoadDevelopersSuccess} from './developer.action';

@Injectable()
export class DeveloperEffects {

  constructor(private http: HttpClient,
              private actions$: Actions,
              private messeagesService: MesseagesService) {
  }

  // @Effect()
  //   addDeveloper = this.actions$
  //     .ofType(DeveloperActions.ADD_DEVELOPER)
  //     .mergeMap(() => of(this.messeagesService.messages))
  //     .map(res => new LoadMessages(res));
  //


  @Effect()
  LoadDevelopersForDashboard = this.actions$
    .ofType(DeveloperActions.LOAD_DEVELOPER_DASHBOARD)
    .mergeMap(() => of(this.messeagesService.messages))
    .map(res => new LoadMessages(res));
  @Effect()
  loadDevelopers = this.actions$
    .ofType(DeveloperActions.LOAD_DEVELOPERS)
    .flatMap(() => [
      new ToggleLoader(true),
      new LoadDevelopersSuccess()
    ])
    // .flatMap(() => new ToggleLoader(true));
  @Effect()
  loadDeveloper = this.actions$
    .ofType(DeveloperActions.LOAD_DEVELOPER)
    .mergeMap(() => of(this.messeagesService.messages))
    .map(res => new LoadMessages(res));
  @Effect()
  fetchDevelopers = this.actions$
    .ofType(DeveloperActions.LOAD_DEVELOPERS_SUCCESS)
    .mergeMap(() => of(this.messeagesService.messages))
    .map((res => new LoadMessages(res)));


}


