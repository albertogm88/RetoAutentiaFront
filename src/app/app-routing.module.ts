import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaCursoComponent } from './alta-curso/alta-curso.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';

const routes: Routes = [

  {
    path: 'listado',
    component: ListadoCursosComponent
  },
  {
    path: 'alta',
    component: AltaCursoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
