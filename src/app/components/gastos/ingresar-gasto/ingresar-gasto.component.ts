import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGastos: string = '';
  cantidad: number = 0;
  formularioIncorrecto: boolean = false;
  textoIncorrecto: string = '';

  constructor( private presupuestoService:PresupuestoService) {}

  ngOnInit(): void {
  }

  agregarGastos(){

    if (this.cantidad > this.presupuestoService.cantidadRestante) {

      this.formularioIncorrecto=false;
      this.textoIncorrecto=' La cantidad ingresada es mayor a la cantidad restante';
      return;
    };

    if (this.nombreGastos===''|| this.cantidad <= 0) {

      this.formularioIncorrecto=true;
      this.textoIncorrecto='Nombre del gasto o Cantidad incorrecta'
    }
    else{

      const GASTO={
        nombre:this.nombreGastos,
        cantidad:this.cantidad
      };

      this.presupuestoService.agregarGastos(GASTO);

      //Resetear el Formulario
      this.formularioIncorrecto=false;
      this.cantidad=0;
      this.nombreGastos='';
    }
  };
};
