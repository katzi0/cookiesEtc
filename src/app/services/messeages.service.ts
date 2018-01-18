import {Injectable} from '@angular/core';
import {Message} from '../models/message';
import {DeveloperState} from '../store/developer/developer.reducer';

@Injectable()
export class MesseagesService {
  messages: Message[] = [];
  // msg: Message = {title: 'none'};


  add(message: string) {
    const msg: Message = {title: message};
    this.messages.push(msg);
  }

  clear() {
    this.messages = [];
  }

}
