/*import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealizaroperacionesService {

  private urlcrearOperacion = 'http://localhost:8080/api/transacciones/realizar?';

  constructor(private httpclient:HttpClient) { }

  crearOperacion(idCuenta: number, codigoTransaccion: number, monto: number):Observable<any>{
    const params = new HttpParams()
      .set('idCuenta', idCuenta.toString())
      .set('codigoTransaccion', codigoTransaccion.toString())
      .set('monto', monto.toString());
      return this.httpclient.post(this.urlcrearOperacion, null, { params });     
  }
}
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealizaroperacionesService {

  private baseUrl = 'http://localhost:8080/transaccion';

  constructor(private httpclient: HttpClient) { }

  crearOperacion(codigoTransaccion: number, monto: number): Observable<any> {
    const url = this.getEndpointByCodigo(codigoTransaccion);
    const payload = {
      numeroCuenta: '1234567890',  // Cuenta quemada
      tipoTransaccion: this.getTipoTransaccion(codigoTransaccion),
      monto: monto
    };

    return this.httpclient.post(url, payload);
  }

  private getEndpointByCodigo(codigoTransaccion: number): string {
    switch (codigoTransaccion) {
      case 1: return `${this.baseUrl}/deposito/sucursal`;
      case 2: return `${this.baseUrl}/deposito/cajero`;
      case 3: return `${this.baseUrl}/deposito/otra-cuenta`;
      case 4: return `${this.baseUrl}/compra/establecimiento`;
      case 5: return `${this.baseUrl}/compra/web`;
      case 6: return `${this.baseUrl}/retiro/cajero`;
      default: throw new Error('Código de transacción no válido');
    }
  }

  private getTipoTransaccion(codigoTransaccion: number): string {
    switch (codigoTransaccion) {
      case 1: return 'DEPOSITO_SUCURSAL';
      case 2: return 'DEPOSITO_CAJERO';
      case 3: return 'DEPOSITO_OTRA_CUENTA';
      case 4: return 'COMPRA_ESTABLECIMIENTO';
      case 5: return 'COMPRA_WEB';
      case 6: return 'RETIRO_CAJERO';
      default: return 'DESCONOCIDO';
    }
  }
}