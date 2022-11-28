import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';

import { HttpClientModule } from '@angular/common/http';
import { NewTeskDialogComponent } from './new-tesk-dialog/new-tesk-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TasksComponent,
    NewTeskDialogComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
