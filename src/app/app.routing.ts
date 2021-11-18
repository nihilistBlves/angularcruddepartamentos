import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { VerdepartamentosComponent } from "./components/verdepartamentos/verdepartamentos.component";
import { DetallesdepartamentoComponent } from "./components/detallesdepartamento/detallesdepartamento.component";
import { EliminardepartamentoComponent } from "./components/eliminardepartamento/eliminardepartamento.component";
import { ModificardepartamentoComponent } from "./components/modificardepartamento/modificardepartamento.component";
import { CreardepartamentoComponent } from "./components/creardepartamento/creardepartamento.component";
import { VerempleadosdepartamentoComponent } from "./components/verempleadosdepartamento/verempleadosdepartamento.component";
import { DetallesempleadoComponent } from "./components/detallesempleado/detallesempleado.component";

const routes = [
    {path: "", component: VerdepartamentosComponent},
    {path: "departamentos", component: VerdepartamentosComponent},
    {path: "departamentos/nuevo", component: CreardepartamentoComponent},
    {path: "departamentos/:id", component: DetallesdepartamentoComponent},
    {path: "departamentos/:id/eliminar", component: EliminardepartamentoComponent},
    {path: "departamentos/:id/modificar", component: ModificardepartamentoComponent},
    {path: "departamentos/:id/empleados", component: VerempleadosdepartamentoComponent},
    {path: "departamentos/:id/empleados/:idEmpleado", component: DetallesempleadoComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
