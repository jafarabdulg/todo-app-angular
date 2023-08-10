import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Output() logoutReq = new EventEmitter<boolean>();

  handleLogoutReq() {
    this.logoutReq.emit(false);
  }

  todos: any[] = [];

  name: string = '';
  description: string = '';
  isDone: boolean = false;
  doneMessage: string = 'Done';

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
      isDone: this.isDone,
      doneMessage: this.doneMessage
    }
    this.todos.push(todo);
  }

  delete(index: number): void{
    const confirmed: boolean = window.confirm("are you sure?");
    if (confirmed) {
      this.todos.splice(index, 1);
    }
  }

  done(index: number): void {
    this.todos[index].isDone = !this.todos[index].isDone;
    this.todos[index].doneMessage = this.todos[index].isDone ? 'Undone' : 'Done';
  }
}
