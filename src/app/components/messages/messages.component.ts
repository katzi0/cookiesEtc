import {Component, OnDestroy, OnInit} from '@angular/core';
import {MesseagesService} from '../../services/messeages.service';
import {Message} from '../../models/message';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

interface AppState {
  messages: Message[];
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnDestroy {
  public currentLog: string;
  messages$: Observable<Message[]>;
  unSubscribe: Subject<any> = new Subject<any>();

  constructor(public messeagesService: MesseagesService,
              private store: Store<AppState>) {
    this.messages$ = this.store.select('messages').pipe(takeUntil(this.unSubscribe));
  }
  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

}
