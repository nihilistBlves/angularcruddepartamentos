import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-modificardepartamento',
  templateUrl: './modificardepartamento.component.html',
  styleUrls: ['./modificardepartamento.component.css']
})
export class ModificardepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajalocalidad') cajalocalidad!: ElementRef;

  constructor(
    private _service: DepartamentosService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = params['id'];
      this._service.getDepartamentoById(id).subscribe(response => {
        this.departamento = response;
      });
    });
  }

  modificarDepartamento(): void {
    var numero = parseInt(this.cajanumero.nativeElement.value);
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value;
    this.departamento = new Departamento(numero, nombre, localidad);
    this._service.putDepartamento(this.departamento).subscribe(response => {
      this._router.navigate(['/departamentos', numero]);
    });
  }

}
