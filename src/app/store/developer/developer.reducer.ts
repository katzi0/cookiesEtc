import {Developer} from '../../models/developr.model';
// import {DeveloperState, DeveloperListState, initializeDeveloperState} from './developer.state';
import * as DeveloperActions from './developer.action';

export type Action = DeveloperActions.All;

export interface DeveloperState {
  // showLoader: boolean;
  status: string;
}

const initState: DeveloperState = {
  // showLoader: true,
  status: 'none'
};


export function DeveloperReducer(state = initState, action: Action) {
  console.log(state, action);

  switch (action.type) {
    case DeveloperActions.LOAD_DEVELOPERS:
      return {...state};

    // case DeveloperActions.LOAD_DEVELOPERS_SUCCESS:
    //   return {
    //     ...state,
    //     developers: [
    //       action.payload,
    //       defaultDevelopersStates[0]
    //     ],
    //     loading: false
    //   };

    case DeveloperActions.LOAD_DEVELOPERS_SUCCESS:
      return {...state};

    case DeveloperActions.ADD_DEVELOPER:
      return {...state};

    default:
      return state;
  }
}
