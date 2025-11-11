import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-component',
  imports: [],
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent {

  public numero!: number;
  public nombre!: string;
  public localidad!: string;

  constructor(
    private _route:ActivatedRoute
  ){}

}
