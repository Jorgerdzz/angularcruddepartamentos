import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Departamento } from '../../model/departamento';

@Component({
  selector: 'app-details-component',
  imports: [RouterLink],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent implements OnInit{

  public departamento!: Departamento

  constructor(
    private _activeRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getDepartamento()
  }

  getDepartamento(): void{
    this._activeRoute.params.subscribe((parametros: Params)=>{
      let numero = parametros['numero'];
      let nombre = parametros['nombre'];
      let localidad = parametros['localidad']
      this.departamento = new Departamento(numero, nombre, localidad);
    })
  }

}
