import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute } from '@angular/router';

export interface TaskHistory {
  id: string;
  title: string;
  comment: string;
  time: Date;
}

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.scss']
})
export class TaskHistoryComponent implements OnInit {

  displayedColumns: string[] = ['title', 'comment', 'time'];
  comments: Array<any> = [];
  constructor(
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getComments(id);
    });
  }

  getComments(id: string) {
    this.comments = this.sharedService.getComments(id);
    console.log(this.comments);
  }


}
