import { Injectable } from '@angular/core';

@Injectable()
export class MesseagesService {
  messeages: string[] = [];

  add(message: string){
    this.messeages.push(message);
  }
  clear(){
    this.messeages = [];
  }

}
