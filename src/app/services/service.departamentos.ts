import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../model/departamento";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ServiceDepartamento{

    constructor(private _http:HttpClient){}

    getDepartamentos(): Promise<Array<Departamento>>{
        let url = environment.urlApiDepartamentos;
        let request = "api/Departamentos";
        const departamentos = fetch(url + request).then(response=>response.json());
        return departamentos;
    }

    getDepartamento(id: number): Promise<Departamento>{
        let url = environment.urlApiDepartamentos;
        let request = "api/Departamentos/" + id;
        const departamento = fetch(url + request).then(response=>response.json());
        return departamento;
    }

    createDepartamento(departamento: Departamento): Observable<any>{
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        let url = environment.urlApiDepartamentos;
        let request = "api/Departamentos";
        return this._http.post(url + request, json, {headers:header})
    }

    updateDepartamento(departamento: Departamento): Observable<any>{
        let url = environment.urlApiDepartamentos;
        let request = "api/Departamentos";
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        return this._http.put(url + request, json, {headers: header})
    }

    deleteDepartamento(id: number): Observable<any>{
        let url = environment.urlApiDepartamentos;
        let request = "api/Departamentos/" + id;
        return this._http.delete(url + request)
    }

    

}