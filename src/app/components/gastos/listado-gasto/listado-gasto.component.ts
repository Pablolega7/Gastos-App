import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-listado-gasto',
  templateUrl: './listado-gasto.component.html',
  styleUrls: ['./listado-gasto.component.css']
})
export class ListadoGastoComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  presupuesto:number = 0;
  restante:number = 0;
  listaGastos:any[] = [];

  constructor(private presupuestoService:PresupuestoService) {

    this.subscription= this.presupuestoService.getGastos().subscribe(data=>{

      this.listaGastos.push(data);
      this.restante=this.restante - data.cantidad;
    });
  };

  ngOnInit(): void {

    this.presupuesto = this.presupuestoService.presupuesto;
    this.restante = this.presupuestoService.cantidadRestante;
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  };

  aplicarColor(){

    if (this.presupuesto / 4 > this.restante) {
    
      return 'alert alert-danger'; 
    } 
    else if (this.presupuesto / 2 > this.restante) {

      return 'alert alert-warning';
    }
    else{

      return 'alert alert-secondary'
    }
  };
  
  // aplicarColorBoolean(){
  //   if (this.presupuesto / 4 > this.restante) return true; 
  //   else if (this.presupuesto / 2 > this.restante) return true;
  //   else return false;
  // };
};
