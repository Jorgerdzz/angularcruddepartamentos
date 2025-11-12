import { Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { UpdateComponent } from './components/update-component/update-component';

export const routes: Routes = [
    {path: "", component:DepartamentosComponent},
    {path: "create", component:CreateComponent},
    {path: "details/:numero/:nombre/:localidad", component:DetailsComponent},
    {path: "update/:numero", component: UpdateComponent}
];
