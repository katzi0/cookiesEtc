import { Component, OnInit } from '@angular/core';
import { Developer } from "../developr";
import { DeveloperService } from '../developer.service';
import { MesseagesService } from '../messeages.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']//,
  // providers: [DeveloperService]
})
export class DevelopersComponent implements OnInit {

  developers:Developer[];

  constructor(private developerService:DeveloperService, private messeagesService:MesseagesService) { }

  ngOnInit() {
    this.developerService.getDevelopers()
      .subscribe(developers=> this.developers = developers);
  }
  add(developerName:string){
    developerName = developerName.trim();
    if(!developerName) { return };

    this.developerService.addDeveloper({ name:developerName } as Developer)
      .subscribe(developer => {
        this.developers.push(developer)

      });
  }
  delete(developer:Developer){
    this.developers = this.developers.filter(dev => dev !== developer);
    this.developerService.deleteDeveloper(developer)
    .subscribe();
  }

}
