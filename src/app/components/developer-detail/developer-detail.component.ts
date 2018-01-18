import {Component, OnInit, Input} from '@angular/core';
import {Developer} from '../../models/developr.model';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DeveloperService} from '../../services/developer.service';

@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.scss']
})
export class DeveloperDetailComponent implements OnInit {
  @Input() developer: Developer;
  welcomeMsg = '--not initalized yet--';

  constructor(private route: ActivatedRoute,
              private developerService: DeveloperService,
              private location: Location) {
  }

  ngOnInit() {
    this.getDeveloper();
    this.welcomeMsg = this.developer ?
      `welcome, ${this.developer.name}` : `welcome uknown`;
  }

  getDeveloper() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerService.getDeveloper(id).subscribe(developer => this.developer = developer);
  }

  goBack() {
    this.location.back();
  }

  saveDeveloper() {
    this.developerService.updateDeveloper(this.developer).subscribe(() => this.goBack());
  }
}
