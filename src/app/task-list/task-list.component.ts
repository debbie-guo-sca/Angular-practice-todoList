import { Component, OnInit } from '@angular/core';

class Task {
  public isDone = false;

  constructor(public title: string) {}

  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      new Task ("Visit Ann"),
      new Task ("Call Dad"),
      new Task ("Go to Gym")
    ];
  }

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task) {
    console.log(existingTask)
    var userConfirmed = confirm(`Are you sure you want to remove ${existingTask.title}`)
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}
