import {Component} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: any[] = [];

  name: string = '';
  description: string = '';

  onKeyPress(event: any): void{
    if (event.target.id === 'todo') {
      this.name = event.target.value;
    } else {
      this.description = event.target.value;
    }
  }

  submit(): void{
    const todo = {
      name: this.name,
      description: this.description,
      isDone: false
    }
    this.todos.push(todo);
    // console.log(this.todos, 'todos')
    // console.log(todo, 'todo')
  }

  delete(index: number): void{
    const confirmed: boolean = window.confirm("are you sure?");
    if (confirmed) {
      this.todos.splice(index, 1);
    }
  }

  doneClicked: boolean = false;
  doneMessage: string = 'Done';
  done(index: number): void {
    this.doneClicked = !this.doneClicked;
    if (this.doneClicked) {
      this.doneMessage = 'Cancel';
    } else {
      this.doneMessage = 'Done';
    }

    this.todos[index].isDone = !this.todos[index].isDone;

    console.log(index)
  }
}
