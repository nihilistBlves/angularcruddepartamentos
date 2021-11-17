import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detallesdepartamento',
  templateUrl: './detallesdepartamento.component.html',
  styleUrls: ['./detallesdepartamento.component.css']
})
export class DetallesdepartamentoComponent implements OnInit {
  public departamento!: Departamento;

  constructor(
    private _service: DepartamentosService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = params["id"];
      this._service.getDepartamentoById(id).subscribe(response => {
        this.departamento = response;
      });
    })
  }

}
