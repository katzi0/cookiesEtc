import {Action} from '@ngrx/store';

export const TOGGLE_LOADER = '[LOADER] Toggle Loader';

export class ToggleLoader implements Action {
  public type: string;
  public payload: boolean;

  constructor(payload: boolean) {
    this.type = TOGGLE_LOADER;
    this.payload = payload;
  }
}

export type LoaderActions = ToggleLoader;
