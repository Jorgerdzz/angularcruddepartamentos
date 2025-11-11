import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../model/departamento';
import { ServiceDepartamento } from '../../services/service.departamentos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-departamentos-component',
  imports: [RouterLink],
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
  providers: [ServiceDepartamento]
})
export class DepartamentosComponent implements OnInit{

  public departamentos!: Array<Departamento>

  constructor(private _service:ServiceDepartamento){}

  ngOnInit(): void {
    this.getDepartamentos();
  }
  
  getDepartamentos(): void{
    this._service.getDepartamentos().then(response=>{
      this.departamentos = response;
    })
  }

}
