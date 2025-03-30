import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasaldoService {  

  private apiUrl = 'http://localhost:8080/cuenta/saldo';

  constructor(private httpClient:HttpClient) { }
  /*getSaldo():Observable<any>{
    return this.httpClient.get('http://localhost:8080/api/cuentas/1');
  }*/

  /*getSaldo(numeroCuenta: string): Observable<any> {
    const body = {
      numeroCuenta: numeroCuenta,
      saldo: 0
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.get<any>(this.apiUrl, body, { headers });
  }*/

  getSaldo(numeroCuenta: string): Observable<any> {
    const url = `${this.apiUrl}?numeroCuenta=${numeroCuenta}`;
    return this.httpClient.get<any>(url);
  }
}
