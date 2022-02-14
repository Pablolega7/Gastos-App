import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [

  {path:'',redirectTo:'/presupuestos',pathMatch:'full'},
  {path:'presupuestos',component:PresupuestosComponent},
  {path:'gastos',component:GastosComponent},
  {path:'**',redirectTo:'/presupuestos',pathMatch:'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
