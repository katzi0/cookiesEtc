import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {Developer} from './models/developr.model';
import {of} from 'rxjs/observable/of';
import {OfficeLocation} from './office.location';

const API_KEY = `&APPID=6e178146447d4c49019dcd861505369d`;
const UNITS = `&units=metric`;
const API_ADDRESS = `http://api.openweathermap.org/data/2.5/weather?`;
// lat=35&lon=139`;

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient, ) { }
  getWeather(location: OfficeLocation): Observable<any> {
      const url = `${API_ADDRESS}lat=${location.latitude}&lon=${location.longitude}${UNITS}${API_KEY}`;
      return this.http.get<any>(url)//.map(res => res.weather)
      .pipe(
        catchError(this.handleError('getWeather', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
