import {Developer} from '../../models/developr.model';
import { DeveloperState, DeveloperListState, initializeDeveloperState } from './developer.state';
import * as DeveloperActions from './developer.action';

export type Action = DeveloperActions.All;

const defaultDevelopersStates: DeveloperState[] = [
  {
    ...Developer.generateMockDeveloper(),
    ...initializeDeveloperState()
  }
]


const defaultState: DeveloperListState = {
  developers: defaultDevelopersStates,
  loading: false,
  pending: 0
}

export function DeveloperReducer(state = defaultState, action: Action) {
  console.log(state, action);

  switch (action.type) {
    case DeveloperActions.LOAD_DEVELOPERS:
      return {...state, loaded: false, loading: true};

    case DeveloperActions.LOAD_DEVELOPERS_SUCCESS:
      return {
        ...state,
        developers: [
          action.payload,
          defaultDevelopersStates[0]
        ],
        loading: false
      };
  }
}
