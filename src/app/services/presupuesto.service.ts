import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto:number = 0;
  cantidadRestante:number = 0;
  private $gastos = new Subject<any>();

  constructor() {}

  agregarGastos(gasto:any){

    this.cantidadRestante=this.cantidadRestante - gasto.cantidad;
    this.$gastos.next(gasto);
  };

  getGastos():Observable<any>{

    return this.$gastos.asObservable();
  };
};
