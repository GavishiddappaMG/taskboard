import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { TaskboardRoutingModule } from './taskboard-routing.module';
import { TaskboardComponent, ModalComponent } from './taskboard/taskboard.component';
import { WidgetModule } from '../widget/widget.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskHistoryComponent } from './task-history/task-history.component';

@NgModule({
  declarations: [TaskboardComponent, ModalComponent, TaskHistoryComponent],
  imports: [
    CommonModule,
    TaskboardRoutingModule,
    WidgetModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  entryComponents: [ModalComponent]
})
export class TaskboardModule { }
