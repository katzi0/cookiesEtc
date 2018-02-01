import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Developer} from '../../models/developr.model';
import {DeveloperService} from '../../services/developer.service';
import {Subject} from 'rxjs/Subject';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as DeveloperAction from '../../store/developer/developer.action';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {take} from 'rxjs/operator/take';

interface AppState {
  developers: {
    showLoader: boolean,
    status: string
  };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DeveloperService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit, OnDestroy {
  developers: Developer[] = [];
  developersObservable: Observable<Developer[]>;
  unSubscribe: Subject<any> = new Subject();


  constructor(private developerService: DeveloperService, private store: Store<AppState>, private http: HttpClient) {
    this.developersObservable =  this.developerService.getDevelopersDashboard();
  }

  ngOnInit() {
    this.getDevelopersDashboard();
    this.store.dispatch(new DeveloperAction.LoadDevelopersForDashboard());
    // this.http.get<any>(this.url)
    //   .subscribe(x => {
    //     console.log(x[0]),
    //       this.testDev = x[0];
    //   });
    // this.getDevelopersTest();
  }

  getDevelopersDashboard(): void {
    this.developersObservable.pipe(takeUntil(this.unSubscribe));
    this.developersObservable.subscribe(developers => this.developers = developers.slice(1, 5));
  }

  search(term: string) {
    this.developerService.searchDevelopers(term).subscribe(developers => this.developers = developers);
  }


  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
