import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskTitle: string;
  @Input() tasks: Array<{ title: string, description: string }>;


  constructor() { }

  ngOnInit() {
  }



}
