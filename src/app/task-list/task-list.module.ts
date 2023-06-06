import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';


@NgModule({
  declarations: [
    TaskListComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskListComponent  // exports  ( so that we can imports in the app module)
  ]
})
export class TaskListModule { }
