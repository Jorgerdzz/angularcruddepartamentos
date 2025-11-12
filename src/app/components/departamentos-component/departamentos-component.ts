import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../model/departamento';
import { ServiceDepartamento } from '../../services/service.departamentos';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departamentos-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
  providers: [ServiceDepartamento]
})
export class DepartamentosComponent implements OnInit{

  public departamentos!: Array<Departamento>
  public id!: number

  constructor(private _service:ServiceDepartamento){}

  ngOnInit(): void {
    this.getDepartamentos();
  }
  
  getDepartamentos(): void{
    this._service.getDepartamentos().then(response=>{
      this.departamentos = response;
    })
  }

  deleteDepartamento(idDepartamento: number): void{
    this._service.deleteDepartamento(idDepartamento).subscribe(()=>{
      this.getDepartamentos();
    })
  }

}
