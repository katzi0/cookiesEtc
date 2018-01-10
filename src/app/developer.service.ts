import { Injectable } from '@angular/core';
import { DEVELOPERS } from './mock-developers';
import { Developer } from './developr';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { MesseagesService } from './messeages.service';

@Injectable()
export class DeveloperService {

  constructor(public messeagesService:MesseagesService) { }

  getDevelopers(): Observable<Developer[]>{
    return of(DEVELOPERS);
  }

  getDeveloper(id:number){
    this.messeagesService.add(`developers service, fetched developer with ID=${id}`);
    return of(DEVELOPERS.find(hero => hero.id === id));
  }

}
