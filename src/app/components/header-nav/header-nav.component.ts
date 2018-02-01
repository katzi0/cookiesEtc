import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subject} from 'rxjs/Subject';
import {takeUntil} from 'rxjs/operators/takeUntil';
import {Observable} from 'rxjs/Observable';

export interface Loader {
  showLoader: boolean;
}

export interface AppState {
  loader;
}


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit, OnDestroy {
  unSubscribe: Subject<any> = new Subject<any>();
  loaderState: Observable<Loader[]>;
  status: Boolean;

  constructor(private store: Store<AppState>) {
   // this.loaderState =
     this.store.select('loader').pipe(takeUntil(this.unSubscribe)).subscribe(x => console.log("ayayay:"+x));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
