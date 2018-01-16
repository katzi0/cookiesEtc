import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-developer-item',
  templateUrl: './developer-item.component.html',
  styleUrls: ['./developer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperItemComponent implements OnInit {
  @Input() developer;

  @Output() created = new EventEmitter<any>();
  @Output() deleted = new EventEmitter<any>();
  @Output() edited = new EventEmitter<any>();
  @Output() completed = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    console.log(this.developer);
  }

  createTodo(developer){
    console.log(developer)
    this.created.emit(developer)
  }


  editTodo(developer){
    this.developer.editing = !this.developer.editing;
  }

  completeTodo(developer){
    this.completed.emit(developer)
  }


  editTodoSubmit(developer){
    this.edited.emit(developer)
  }

}
