import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsultaHistoriaService { 
  
  private apiUrl = 'http://localhost:8080/cuenta/historial';

  constructor(private httpClient:HttpClient) { }

  getHistoria(numeroCuenta: string): Observable<any[]> {
    const url = `${this.apiUrl}?numeroCuenta=${numeroCuenta}`;
    return this.httpClient.get<any>(url).pipe(
      map((data: any[]) => {
        return data.map((item: any) => {
          // Si los datos vienen como string, los parseamos a objetos
          if (typeof item === 'string') {
            const partes = item.split(', ');
            return {
              Tipo: partes[1].split(': ')[1],
              Fecha: new Date(partes[3].split(': ')[1]), // Convertir fecha a Date
              Monto: parseFloat(partes[2].split(': ')[1]), // Convertir monto a número
            };
          }
          return item;
        });
      })
    );
  }
}
