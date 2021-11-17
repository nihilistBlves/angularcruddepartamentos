import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creardepartamento',
  templateUrl: './creardepartamento.component.html',
  styleUrls: ['./creardepartamento.component.css']
})
export class CreardepartamentoComponent implements OnInit {
  public departamento!: Departamento;
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  @ViewChild('cajalocalidad') cajalocalidad!: ElementRef;

  constructor(private _service: DepartamentosService, private _router: Router) { }

  ngOnInit(): void {
  }

  crearDepartamento(): void {
    var numero = parseInt(this.cajanumero.nativeElement.value);
    var nombre = this.cajanombre.nativeElement.value;
    var localidad = this.cajalocalidad.nativeElement.value;
    this.departamento = new Departamento(numero, nombre, localidad);
    this._service.postDepartamento(this.departamento).subscribe(response => {
      this._router.navigate(['departamentos']);
    });
  }

}
