import {MessagesActionTypes, MessagesActions} from './messages.action';
import {ActionReducer, createFeatureSelector, createSelector} from '@ngrx/store';
import {Message} from '../../models/message';

const initState: Message[] = [];

export interface MessageState {
  messages: Message[]
}

export function MessageReducer(state: Message[] = initState, action: MessagesActions): Message[] {
  switch (action.type) {
    case MessagesActionTypes.LoadMessages:
      return [...action.payload];
  }
}

export const selectFeature = createFeatureSelector<MessageState>('messages');
export const selectMessages  = createSelector(selectFeature, (state) => state.messages);
