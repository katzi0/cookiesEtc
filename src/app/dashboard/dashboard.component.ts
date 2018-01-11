import { Component, OnInit } from '@angular/core';
import { Developer } from '../developr';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  developers: Developer[] = [];

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.developerService.getDevelopers()
      .subscribe(developers => this.developers = developers.slice(1, 5));
  }
  search(term:string){
    this.developerService.searchDevelopers(term).subscribe(developers => this.developers = developers);
  }
}
