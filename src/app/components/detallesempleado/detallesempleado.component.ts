import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/app/models/empleado';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css']
})
export class DetallesempleadoComponent implements OnInit {
  public empleado!: Empleado;
  public idDepartamento!: string;
  @ViewChild('cajasalario') cajasalario!: ElementRef;

  constructor(private _service: EmpleadosService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.idDepartamento = params['id'];
      this._service.getEmpleado(params['idEmpleado']).subscribe(response => {
        this.empleado = response;
      });
    });
  }

  getEmpleado(): void {
    this._service.getEmpleado(this.empleado.idEmpleado.toString()).subscribe(response => {
      this.empleado = response;
    });
  }

  incrementarSalario(): void {
    var salario = parseInt(this.cajasalario.nativeElement.value);
    this._service.incrementarSalarioEmpleado(this.empleado.idEmpleado.toString(), salario).subscribe(response => {
      this.getEmpleado();
    })
  }

}
