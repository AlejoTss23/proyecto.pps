import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      console.log('Inicio de sesión exitoso:', response);
      // Aquí puedes redirigir a otra página después del inicio de sesión exitoso
    }, error => {
      console.error('Error de inicio de sesión:', error);
    });
  }      
}
  