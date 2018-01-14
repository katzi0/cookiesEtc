import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';


import { DeveloperService } from '../developer.service';
import {Developer} from '../developr';

@Component({
  selector: 'app-developer-location',
  templateUrl: './developer-location.component.html',
  styleUrls: ['./developer-location.component.scss']
})
export class DeveloperLocationComponent implements OnInit {
  developer: Developer;
  constructor(
    // private location:Location,
    private route: ActivatedRoute,
    private developerService: DeveloperService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerService.getDeveloper(id).subscribe(developer => this.developer = developer);
  }

}
