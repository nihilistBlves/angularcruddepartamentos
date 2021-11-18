import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { VerdepartamentosComponent } from './components/verdepartamentos/verdepartamentos.component';
import { CreardepartamentoComponent } from './components/creardepartamento/creardepartamento.component';
import { DetallesdepartamentoComponent } from './components/detallesdepartamento/detallesdepartamento.component';
import { EliminardepartamentoComponent } from './components/eliminardepartamento/eliminardepartamento.component';
import { ModificardepartamentoComponent } from './components/modificardepartamento/modificardepartamento.component';
import { appRoutingProviders, routing } from './app.routing';
import { DepartamentosService } from './services/departamentos.service';
import { VerempleadosdepartamentoComponent } from './components/verempleadosdepartamento/verempleadosdepartamento.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';
import { EmpleadosService } from './services/empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VerdepartamentosComponent,
    CreardepartamentoComponent,
    DetallesdepartamentoComponent,
    EliminardepartamentoComponent,
    ModificardepartamentoComponent,
    VerempleadosdepartamentoComponent,
    DetallesempleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders, DepartamentosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
