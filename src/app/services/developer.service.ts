import {Injectable} from '@angular/core';
import {DEVELOPERS} from '../mocks/mock-developers';
import {Developer} from '../models/developr.model';
import {Observable} from 'rxjs/observable';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {MesseagesService} from './messeages.service';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable()
export class DeveloperService {
  private developersUrl = 'api/heroes';
  private developersApi = 'http://localhost:3000/';

  constructor(private messeagesService: MesseagesService, private http: HttpClient) {
  }

  getDevelopers() {
    this.log(`getDevelopers`);
    return of(DEVELOPERS);
  }

  saveDeveloperTest(developer: Developer) {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    const url = `${this.developersApi}${developer.id}`;
    console.log('url:' + url);
    // // return this.http.post()<Developer[]>(this.developersApi, developer);
    // return this.http.post<Developer>(url, developer);
    console.log(JSON.stringify(developer));
    this.http.post(url,
      JSON.stringify(developer), {'headers': header}
    )
      .subscribe(
        res => console.log(res),
        err => {
          console.log('Error occured');
        }
      );
  }


  getDevelopersDashboard(): Observable<Developer[]> {
    this.log(`getDevelopersDashboard`);
    const url = `${this.developersApi}`;
    return this.http.get<Developer[]>(url);
    // return of(DEVELOPERS);
  }

  getDeveloper(id: number): Observable<Developer> {
    const url = `${this.developersApi}${id}`;

    return this.http.get<Developer>(url);
    // return of(DEVELOPERS.find(developer => developer.id === id));
  }

  updateDeveloper(developer: Developer): Observable<any> {
    this.log(`updateDeveloper with id=${developer.id}`);
    const developerToUpdateIndex = DEVELOPERS.findIndex(developerToReplace => developerToReplace.id === developer.id);
    DEVELOPERS.splice(developerToUpdateIndex, 1, developer);
    return of(DEVELOPERS);
  }

  addDeveloper(developer: Developer): Observable<Developer> {
    const id = Math.max(...DEVELOPERS.map(x => x.id)) + 1;
    console.log('id:' + id);
    this.log(`addDeveloper with id=${id}`);
    developer.id = id;
    DEVELOPERS.push(developer);
    return of(developer);
  }

  deleteDeveloper(developer: Developer): Observable<Developer> {
    this.log(`deleteDeveloper with id=${developer.id}`);
    const id = typeof developer === 'number' ? developer : developer.id;
    // const url = `${this.developersUrl}/${id}`;
    const developerToUpdateIndex = DEVELOPERS.findIndex(developerToReplace => developerToReplace.id === developer.id);
    DEVELOPERS.splice(developerToUpdateIndex, 1);
    return of(developer);
  }

  searchDevelopers(term: string): Observable<Developer[]> {
    let arr = [];
    arr = DEVELOPERS.filter(dev => dev.name.includes(term));
    return of(arr);
  }

  log(message: string) {
    this.messeagesService.add('DeveloperService' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /**
   OLD IMPLEMENTATION, used in-memory-data.service.ts
   */
  // getDeveloper(id: number): Observable<Developer> {
  //   const url = `${this.developersUrl}/${id}`;
  //   return this.http.get<Developer>(url).pipe(
  //     tap(_ => this.log(`fetched developer id=${id}`)),
  //     catchError(this.handleError<Developer>(`getDeveloper id=${id}`))
  //   );
  // }

  // searchDevelopers(term:string):Observable<Developer[]>{
  //   if(!(term.trim())){
  //     return of([]);
  //   }
  //   return this.http.get<Developer[]>(`api/heroes/?name=${term}`).pipe(
  //     tap(_ => this.log(`found develoers matching "${term}"`)),
  //     catchError(this.handleError<Developer[]>('searchDevelopers', []))
  //   )
  //
  // }

  //   deleteDeveloper (developer: Developer | number): Observable<Developer> {
  //   const id = typeof developer === 'number' ? developer : developer.id;
  //   const url = `${this.developersUrl}/${id}`;
  //
  //   return this.http.delete<Developer>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted developer id=${id}`)),
  //     catchError(this.handleError<Developer>('deleteDeveloper'))
  //   );
  // }

  // addDeveloper(developer:Developer):Observable<Developer>{
  //   console.log({developer})
  //   return this.http.post(this.developersUrl,developer,httpOptions).pipe(
  //     tap((developer:Developer) => this.log(`added new developer with id = ${developer.id}`)),
  //     catchError(this.handleError<Developer>("addDeveloper"))
  //   );
  // }

  //   updateDeveloper(developer:Developer): Observable<any> {
  //   return this.http.put(this.developersUrl,developer,httpOptions).pipe(
  //     tap(_ => this.log(`updated developer id = ${developer.id}`)),
  //     catchError(this.handleError<any>(`updateDeveloper id = ${developer.id}`))
  //   );
  // }

  // getDevelopers(): Observable<Developer[]> {
  //   // return (DEVELOPERS);
  //   return this.http.get<Developer[]>(this.developersUrl)
  //     .pipe(
  //       tap(developers => this.log("fetch developers")),
  //       catchError(this.handleError('getDeveloperts',[]))
  //     );
  // }
  /**
   OLD IMPLEMENTATION, used in-memory-data.service.ts
   */
}

