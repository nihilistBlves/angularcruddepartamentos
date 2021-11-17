import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DepartamentosService {
    constructor(private _http: HttpClient) {};

    getDepartamentos(): Observable<any> {
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        return this._http.get(url);
    }

    getDepartamentoById(id: string): Observable<any> {
        var request = "/api/departamentos/" + id;
        var url = Global.urlDepartamentos + request;
        return this._http.get(url);
    }

    postDepartamento(departamento: Departamento): Observable<any> {
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(url, json, {headers: header});
    }

    deleteDepartamento(idDepartamento: string): Observable<any> {
        var request = "/api/departamentos/" + idDepartamento;
        var url = Global.urlDepartamentos + request;
        return this._http.delete(url);
    }

    putDepartamento(departamento: Departamento): Observable<any> {
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.put(url, json, {headers: header});
    }
}