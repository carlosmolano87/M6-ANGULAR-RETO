import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  menuItems = ["Inicio", "Necesidades", "Productos y Servicios", "Educación Financiera"]
}
