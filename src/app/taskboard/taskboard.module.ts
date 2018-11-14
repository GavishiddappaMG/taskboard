import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
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
    DragDropModule,
    MatIconModule
  ]
})
export class TaskboardModule { }
