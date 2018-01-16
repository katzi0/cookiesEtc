import { DeveloperState } from './developer.state';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as DeveloperActions from './developer.action';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeveloperEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

}