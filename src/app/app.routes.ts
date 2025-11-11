import { Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateComponent } from './components/create-component/create-component';

export const routes: Routes = [
    {path: "", component:DepartamentosComponent},
    {path: "create", component:CreateComponent}
];
