import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoCursosService } from './catalogo-cursos.service';
import { ProfesoresService } from './profesores.service';
import { NivelesService } from './niveles.service';
import { AltaCursoComponent } from './alta-curso/alta-curso.component';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AltaCursoComponent,
    ListadoCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgbModule
  ],
  providers: [CatalogoCursosService, ProfesoresService, NivelesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
