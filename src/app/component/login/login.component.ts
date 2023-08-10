import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() auth = new EventEmitter<boolean>();
  @Input() isLogin: boolean = false;

  email: string = '';
  password: string = '';

  getInput(event: any): void {
    switch (event.target.id) {
      case 'email': {
        this.email = event.target.value;
        break;
      }
      case 'password': {
        this.password = event.target.value;
        break;
      }
      default: {
        window.alert('error at input!');
        break;
      }
    }
  }

  checkAuth(): void {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      this.auth.emit(true);
      window.alert('login success!');
    } else {
      window.alert('login failed!');
    }
  }
}
