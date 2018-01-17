import { Component, OnInit } from '@angular/core';
import { MesseagesService } from '../../services/messeages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messeagesService:MesseagesService) { }

  ngOnInit() {
  }

}
