import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-eliminardepartamento',
  templateUrl: './eliminardepartamento.component.html',
  styleUrls: ['./eliminardepartamento.component.css']
})
export class EliminardepartamentoComponent implements OnInit {
  public idDepartamento!: string;

  constructor(
    private _service: DepartamentosService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.idDepartamento = params['id'];
    })
  }

  eliminarDepartamento(): void {
    this._service.deleteDepartamento(this.idDepartamento).subscribe(response => {
      this._router.navigate(['departamentos']);
    })
  }

}
