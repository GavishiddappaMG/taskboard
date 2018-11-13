import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { TaskboardRoutingModule } from './taskboard-routing.module';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { WidgetModule } from '../widget/widget.module';

@NgModule({
  declarations: [TaskboardComponent, TaskListComponent],
  imports: [
    CommonModule,
    TaskboardRoutingModule,
    WidgetModule,
    NgxDnDModule
  ]
})
export class TaskboardModule { }
