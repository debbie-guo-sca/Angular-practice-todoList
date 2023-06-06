import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list test binding';
  tasks : Task[]  = [
    new Task ("Visit Ann"),
    new Task ("call Dad"),
    new Task ("Go to Gym")
  ];
  add(newTask: string){
    this.tasks.push(new Task (newTask))
  };
  remove(existingTask: Task){
    console.log(existingTask)
    var userConfirmed = confirm(`Are u sure you want to remove ${existingTask.title}`)
    if (userConfirmed) {
    this.tasks = this.tasks.filter(task => task != existingTask);
    }
  };

}

class Task {
  constructor (public title: string){

  }
  toggleIsDone(){ // this method should be inside the Task 
    this.isDone = !this.isDone; 
  }
  public isDone = false; 
}