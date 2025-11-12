import { Component, OnInit } from '@angular/core';
import { ServiceDepartamento } from '../../services/service.departamentos';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from '../../model/departamento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-component',
  imports: [FormsModule],
  templateUrl: './update-component.html',
  styleUrl: './update-component.css',
  providers: [ServiceDepartamento]
})
export class UpdateComponent implements OnInit{

  public numero!: number;
  public departamento!: Departamento

  constructor(
    private _service:ServiceDepartamento,
    private _activeRoute: ActivatedRoute,
    private _router:Router
  ){}

  ngOnInit(): void {
    this.getDepartamento();
  }

  getDepartamento(): void{
    this._activeRoute.params.subscribe((params: Params)=>{
      let id = params['numero'];
      this._service.getDepartamento(id).then(response=>{
        this.departamento = response;
      })
    })
    
  }

  updateDepartamento(): void{
    this._service.updateDepartamento(this.departamento).subscribe(()=>{
      this._router.navigate(['/']);
    })
  }


}
