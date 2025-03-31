import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { delay, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { State } from '../state/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //private formBuilder = inject(FormBuilder);

  constructor(private formBuilder: FormBuilder, private state:State, private router:Router) { }

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  enviar() {
    if (this.loginForm.valid) {
      const usuario = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      if(usuario === 'carlos' && password === '123456') {
        console.log('Usuario logueado');
        this.state.userEmail = 'carlosmolano@gmail.com';
        console.log('Usuario logueado2');
      this.router.navigateByUrl('/transactions');
    }else{
      alert("Usuario no valido");
  } 
}
}   

}
