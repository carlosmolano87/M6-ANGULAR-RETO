import { HttpClient, HttpParams } from '@angular/common/http';
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
