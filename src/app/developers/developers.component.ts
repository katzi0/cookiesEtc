import { Component, OnInit } from '@angular/core';
import { Developer } from "../developr";
import { DeveloperService } from '../developer.service';
import { MesseagesService } from '../messeages.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']//,
  // providers: [DeveloperService]
})
export class DevelopersComponent implements OnInit {
developers:Developer[];
selectedDeveloper:Developer;
  constructor(private developerService:DeveloperService, private messeagesService:MesseagesService) { }

  ngOnInit() {
    this.developerService.getDevelopers().subscribe(developers=> this.developers = developers);
  }

  onSelect(developer:Developer){
    this.selectedDeveloper = developer;
    this.messeagesService.add("developer: " + developer.name + " selected");
  }

}
