import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { DeveloperDetailComponent } from './components/developer-detail/developer-detail.component';
import {DeveloperService} from "./services/developer.service";
import { MessagesComponent } from './components/messages/messages.component';
import { MesseagesService } from './services/messeages.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DeveloperSearchComponent } from './components/developer-search/developer-search.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { DeveloperLocationComponent } from './components/developer-location/developer-location.component';
import { CesiumComponent } from './components/cesium/cesium.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import {WeatherService} from './services/weather.service';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import {DeveloperEffects} from './store/developer/developer.effects';
import {DeveloperReducer} from './store/developer/developer.reducer';
// import { DeveloperItemComponent } from './components/developer-item/developer-item.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MessageReducer} from './store/messages/message.reducer';


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
    CesiumComponent,
    WeatherWidgetComponent
    // DeveloperItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      developers: DeveloperReducer,
      messages: MessageReducer
    }),
    EffectsModule.forRoot([DeveloperEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
    // StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 5})

  ],
  entryComponents: [CesiumComponent],
  providers: [DeveloperService, MesseagesService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
