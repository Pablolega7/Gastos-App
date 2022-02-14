import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  cantidad: number = 0;
  cantidadIncorrecta: boolean = false;

  constructor(private presupuestoService:PresupuestoService, 
              private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){

    if (this.cantidad > 0) {

      this.cantidadIncorrecta=false;
      this.presupuestoService.presupuesto= this.cantidad;
      this.presupuestoService.cantidadRestante=this.cantidad;
      this.router.navigate(['/gastos']);
    } 
    else {

      this.cantidadIncorrecta=true
    }
  };
};
