import {Action} from '@ngrx/store';
import {Message} from '../../models/message';

export enum MessagesActionTypes {
  LoadMessages = '[Messages] Get'
}


export class LoadMessages implements Action {
  public type: string;
  public payload: any;

  constructor(payload: Message[]) {
    console.log(payload);
    this.type = MessagesActionTypes.LoadMessages;
    this.payload = payload;
  }
}

export type MessagesActions = LoadMessages;
