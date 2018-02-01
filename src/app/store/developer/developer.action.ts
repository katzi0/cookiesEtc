import {Developer} from '../../models/developr.model';
import {Action} from '@ngrx/store';

// export enum developerActionTypes {
//   LoadDevelopers = '[Developers] Get',
//   FetchDevelopersFromApi = '[Developers] Fetch',
//   LoadDevelopersSuccess = '[Developers] Fetch success',
//   UpdateDevelopers = '[Developers] Update books',
//   LoadDevelopersError = '[Developers] Fetch error',
// }


export const LOAD_DEVELOPERS = '[Developers] Get';
export const FETCH_DEVELOPERS_FROM_API = '[Developers] Fetch';
export const LOAD_DEVELOPERS_SUCCESS = '[Developers] Fetch success';
export const UPDATE_DEVELOPERS = '[Developers] Update books';
export const LOAD_DEVELOPERS_ERROR = '[Developers] Fetch error';
export const ADD_DEVELOPER = '[Developers] Add';
export const ADD_DEVELOPER_SUCCESS = '[Developers] Add Success';
export const LOAD_DEVELOPER_DASHBOARD = '[Developers] Get For Dashboard';
export const LOAD_DEVELOPER = '[Developers] Get Specific Developer';

export class LoadDevelopers implements Action {
  public type: string;
  public payload: any;

  constructor() {
    this.type = LOAD_DEVELOPERS;
    this.payload = null;
  }
}

export class FetchDevelopersFromApi implements Action {
  public type: string;
  public payload: any;

  constructor() {
    // this.type = developerActionTypes.FetchDevelopersFromApi;
    this.payload = null;
  }
}

export class AddDeveloper implements Action {
  public type: string;
  public payload: Developer;

  constructor(payload: Developer) {
    this.type = ADD_DEVELOPER;
    this.payload = payload;
  }
}

export class LoadDevelopersSuccess implements Action {
  public type: string;
  public payload: any;

  constructor() {
    this.type = LOAD_DEVELOPERS_SUCCESS
    // this.payload = true;
  }
}

export class UpdateDevelopers implements Action {
  public type: string;
  public payload: any;

  constructor(payload: Developer[]) {
    // this.type = developerActionTypes.UpdateDevelopers;
    this.payload = payload;
  }
}

export class LoadDevelopersError implements Action {
  public type: string;
  public payload: any;

  constructor(payload: any) {
    // this.type = developerActionTypes.LoadDevelopersError;
    this.payload = payload;
  }
}

export class LoadDevelopersForDashboard implements Action {
  public type: string;
  public payload: any;

  constructor() {
    this.type = LOAD_DEVELOPER_DASHBOARD;
    this.payload = null;
  }
}

export class LoadDeveloper implements Action {
  public type: string;
  public payload: any;

  constructor() {
    this.type = LOAD_DEVELOPER;
    this.payload = null;
  }
}

export type All =
                  LoadDevelopers | AddDeveloper | FetchDevelopersFromApi |
                  LoadDevelopersSuccess | LoadDevelopersError | UpdateDevelopers | LoadDevelopersForDashboard |
                  LoadDeveloper;
