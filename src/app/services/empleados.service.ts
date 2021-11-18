import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EmpleadosService {
    constructor(private _http: HttpClient) {};

    getEmpleadosByDepartamento(idDepartamento: string): Observable<any> {
        var request = "api/empleados/empleadosdepartamento/" + idDepartamento;
        var url = Global.urlEmpleados + request;
        return this._http.get(url);
    }

    getEmpleado(idEmpleado: string): Observable<any> {
        var request = "api/empleados/" + idEmpleado;
        var url = Global.urlEmpleados + request;
        return this._http.get(url);
    }

    incrementarSalarioEmpleado(idEmpleado: string, incremento: number): Observable<any> {
        var request = "api/empleados/incrementarsalario/" + idEmpleado + "/" + incremento;
        var url = Global.urlEmpleadosAction + request;
        var header = new HttpHeaders().set("Content-Type", "application/json");        
        return this._http.put(url, {headers: header});
    }
}