import { Injectable } from '@angular/core';
import { DEVELOPERS } from './mock-developers';
import { Developer } from './developr';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'

@Injectable()
export class DeveloperService {

  constructor() { }

  getDevelopers(): Observable<Developer[]>{
    return of(DEVELOPERS);
  }

}
