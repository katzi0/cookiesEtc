import { Component, OnInit, Input } from '@angular/core';
import {Developer} from "../developr";


@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {
  @Input() developer:Developer;
  constructor() { }

  ngOnInit() {
  }

}
