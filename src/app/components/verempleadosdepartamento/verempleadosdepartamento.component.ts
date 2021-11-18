import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/empleado';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-verempleadosdepartamento',
  templateUrl: './verempleadosdepartamento.component.html',
  styleUrls: ['./verempleadosdepartamento.component.css']
})
export class VerempleadosdepartamentoComponent implements OnInit {
  public idDepartamento!: string;
  public empleados!: Array<Empleado>;

  constructor(private _service: EmpleadosService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.idDepartamento = params['id'];
      this._service.getEmpleadosByDepartamento(this.idDepartamento).subscribe(response => {
        this.empleados = response;
      });
    })
  }

}
