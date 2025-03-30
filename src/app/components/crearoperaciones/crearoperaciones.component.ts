import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RealizaroperacionesService } from 'src/app/servicios/realizaroperaciones.service';

@Component({
  selector: 'app-crearoperaciones',
  templateUrl: './crearoperaciones.component.html',
  styleUrls: ['./crearoperaciones.component.css']
})
export class CrearoperacionesComponent {
  formulario: FormGroup;
  
  // Mapa de códigos de transacción a sus descripciones
  codigosTransaccion = {
    '1': 'Deposito desde sucursal',
    '2': 'Deposito desde cajero automotico',
    '3': 'Deposito desde otra cuenta',
    '4': 'Compra en establecimiento fisico',
    '5': 'Compra en pagina web',
    '6': 'Retiro en cajero'
  };
 
  constructor(private fb: FormBuilder, private realizaroperacionesService: RealizaroperacionesService) {
    this.formulario = this.fb.group({
      cuenta: ['1'],
      codigoTransaccion: [''],
      monto: ['']
    });
  }
 
  enviarFormulario() {
    console.log('Datos del formulario:', this.formulario.value);
    this.realizarTransaccion(
      this.formulario.value.cuenta, 
      this.formulario.value.codigoTransaccion, 
      this.formulario.value.monto
    );
  }

  // Método para obtener la descripción de un código
  getDescripcionTransaccion(codigo: string): string {
    return this.codigosTransaccion[codigo] || 'Tipo de transacción desconocido';
  }

  realizarTransaccion(nroCuenta, codigoTransaccion, valortransaccion): void {
    // Obtener la descripción del código de transacción
    const descripcionTransaccion = this.getDescripcionTransaccion(codigoTransaccion);
    
    this.realizaroperacionesService.crearOperacion(nroCuenta, codigoTransaccion, valortransaccion).subscribe({
      next: (response) => {
        alert('Transacción "' + descripcionTransaccion + '" realizada con éxito');
        this.formulario.patchValue({
          codigoTransaccion: '',
          monto: ''
        });
      },
      error: (err) => {
        alert('Error al realizar la transacción: ' + descripcionTransaccion);
      }
    });
  }
}