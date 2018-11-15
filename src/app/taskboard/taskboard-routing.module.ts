import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskHistoryComponent } from './task-history/task-history.component';

const routes: Routes = [
  { path: '', component: TaskboardComponent },
  { path: 'history/:id', component: TaskHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskboardRoutingModule { }
