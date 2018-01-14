import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import {DeveloperService} from "./developer.service";
import { MessagesComponent } from './messages/messages.component';
import { MesseagesService } from './messeages.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DeveloperSearchComponent } from './developer-search/developer-search.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DeveloperLocationComponent } from './developer-location/developer-location.component';
import { CesiumComponent } from './cesium/cesium.component';



@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    DeveloperDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DeveloperSearchComponent,
    HeaderNavComponent,
    DeveloperLocationComponent,
    CesiumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule,
  ],
  providers: [DeveloperService, MesseagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
