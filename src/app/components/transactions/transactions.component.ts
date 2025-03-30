import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { State } from '../state/state';
import { ConsultasaldoService } from 'src/app/servicios/consultasaldo.service';
import { ConsultaHistoriaService } from 'src/app/servicios/consultahistoria.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers: [DatePipe]
})
export class TransactionsComponent implements OnInit {
  horaActual: string;
  fechaActual: string;
  saldoCuenta: any;
  tipoCuenta: any;
  nroCuenta: any;
  mostrarSaldo: boolean = false;
  mostrarHistoria: boolean = false;  
  codigoTransaccion: any;
  valortransaccion: any;
  historialTransacciones: any[] = [];

  constructor(private datePipe: DatePipe, public state: State, private consultasaldoService: ConsultasaldoService,
    private consultahistoriaService: ConsultaHistoriaService, private router:Router) { }

  ngOnInit(): void {
    this.actualizarFechaHora();
    setInterval(() => this.actualizarFechaHora(), 1000);
  }

  actualizarFechaHora(): void {
    const ahora = new Date();
    this.horaActual = this.datePipe.transform(ahora, 'HH:mm:ss');
    this.fechaActual = this.datePipe.transform(ahora, 'dd/MM/yyyy');
  }

  getSaldo(): void {
    this.consultasaldoService.getSaldo().subscribe((data) => {
      console.log(data);
      this.tipoCuenta = data.tipoCuenta;
      this.nroCuenta = data.numeroCuenta;
      this.saldoCuenta = data.saldo;
      this.mostrarSaldo = true;
      this.mostrarHistoria = false;      
    }
    );
  }

  getHistoria(): void {
    this.consultahistoriaService.getHistoria().subscribe((data) => {
      this.historialTransacciones = data;
      console.log(this.historialTransacciones);
      this.mostrarHistoria = true;
      this.mostrarSaldo = false;      
    }
    );
  }
  
  logout(): void {
    // Reinicia todos los estados
    this.mostrarSaldo = false;
    this.mostrarHistoria = false;
    
    // Limpia los datos del usuario
    this.state.clearUserData();
    
    // Redirecciona a la página principal/login
    this.router.navigateByUrl('/');
  }
}
