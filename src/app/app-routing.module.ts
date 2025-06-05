import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redireciona para /home
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'resultado', component: ResultadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
