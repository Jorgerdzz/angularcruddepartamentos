import { Component } from '@angular/core';
import { Departamento } from '../../model/departamento';
import { ServiceDepartamento } from '../../services/service.departamentos';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  imports: [FormsModule],
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
  providers: [ServiceDepartamento]
})
export class CreateComponent {

  public departamento: Departamento;

  constructor(
    private _service:ServiceDepartamento,
    private _router: Router
  ){
    this.departamento = {
      numero: 0,
      nombre: "",
      localidad: ""
    }
  }

  crearDepartamento(): void{
    this._service.createDepartamento(this.departamento).subscribe(()=>{
      this._router.navigate(['/'])
    })
  }




}
