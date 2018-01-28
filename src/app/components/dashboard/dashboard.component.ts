import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { Developer } from '../../models/developr.model';
import { DeveloperService } from '../../services/developer.service';
import {Subject} from 'rxjs/Subject';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as DeveloperAction from '../../store/developer/developer.action';

interface AppState {
  developers: {
    showLoader: boolean,
    status: string
  };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  providers: [DeveloperService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DashboardComponent implements OnInit, OnDestroy {
  developers: Developer[] = [];
  unSubscribe: Subject<any> = new Subject();
  constructor(private developerService: DeveloperService, private store: Store<AppState>) { }

  ngOnInit() {
    this.getDevelopersDashboard();
    this.store.dispatch(new DeveloperAction.LoadDevelopersForDashboard());
  }

  getDevelopersDashboard(): void {
    this.developerService.getDevelopersDashboard()
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(developers => this.developers = developers.slice(1, 5));
  }
  search(term: string) {
    this.developerService.searchDevelopers(term).subscribe(developers => this.developers = developers);
  }

  ngOnDestroy() {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
