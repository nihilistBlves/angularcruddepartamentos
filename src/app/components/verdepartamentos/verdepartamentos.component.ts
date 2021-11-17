import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';


@Component({
  selector: 'app-verdepartamentos',
  templateUrl: './verdepartamentos.component.html',
  styleUrls: ['./verdepartamentos.component.css']
})
export class VerdepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service: DepartamentosService) { }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    });
  }

  eliminarDepartamento(id: number): void {
    this._service.deleteDepartamento(id.toString()).subscribe(response => {
      this.departamentos = this.departamentos.filter(departamento => departamento.numero != id);
    });
  }
}
