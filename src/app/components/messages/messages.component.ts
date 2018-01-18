import {Component, OnInit} from '@angular/core';
import {MesseagesService} from '../../services/messeages.service';
import {Message} from '../../models/message';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

interface AppState {
  messages: Message[];
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public currentLog: string;
  messages$: Observable<Message[]>;

  constructor(public messeagesService: MesseagesService,
              private store: Store<AppState>) {
    this.messages$ = this.store.select('messages');
  }

  ngOnInit() {
  }

}
