import {createSelector} from '@ngrx/store';
import * as LoaderActions from './loader.action';

export type Action = LoaderActions.LoaderActions;


export interface LoaderState {
  showLoader: boolean;
}


const initState: LoaderState = {
  showLoader: false
};

export function LoaderReducer(state = initState, action: Action) {
  switch (action.type) {
    case LoaderActions.TOGGLE_LOADER:
      return {...state, showLoader: action.payload};
  }
}
//
// export const LoaderState = (state) => state.loader;
//
// export const selectLoading = createSelector(LoaderState, (state) => state.);
