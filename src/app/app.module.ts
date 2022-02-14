import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListadoGastoComponent } from './components/gastos/listado-gasto/listado-gasto.component';


@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    PresupuestosComponent,
    IngresarGastoComponent,
    ListadoGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
