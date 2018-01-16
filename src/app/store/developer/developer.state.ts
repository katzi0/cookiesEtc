import {Developer} from '../../models/developr.model';

export interface DeveloperState extends Developer {
  loading: boolean;

  editable: boolean;
  edited: boolean;
  editing: boolean;

  selected: boolean;
  refreshing: boolean;

  create: boolean;

  error: boolean;
}

export const initializeDeveloperState = function () {
  return {
    loading: false,

    editable: true,
    edited: false,
    editing: false,

    selected: false,
    refreshing: false,

    create: true,

    error: false,
  };
};

export interface DeveloperListState {
  developers: DeveloperState[];
  loading: boolean;
  pending: number;
}

export const intializeDeveloperListState = function () {
  return {
    loading: false,
    pedning: 0,
  };
};
