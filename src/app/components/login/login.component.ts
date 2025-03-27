import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StateLogin } from '../state/state-login';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //private formBuilder = inject(FormBuilder);

  constructor(private formBuilder: FormBuilder, private state:StateLogin, private router:Router) { }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  enviar() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      if(usuario === 'carlos' && password === '56789000') {
        console.log('Usuario logueado');
        this.state.userEmail = 'carlosmolano@gmail.com';
        console.log('Usuario logueado2');
        this.router.navigate(['/boards']);
      }else {
        alert('Usuario o contraseña incorrectos');
      }
    } 
  }
}
