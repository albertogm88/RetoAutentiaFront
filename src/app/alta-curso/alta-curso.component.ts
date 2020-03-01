import { Component, OnInit } from '@angular/core';
import{ ProfesoresService } from '../profesores.service'
import{ NivelesService } from '../niveles.service'
import{ CatalogoCursosService } from '../catalogo-cursos.service'

import {FormControl, Validators, NgForm} from '@angular/forms';
import {CursoForm} from '../model/cursoForm';

import {MatSnackBar} from '@angular/material/snack-bar';

class Nivel{
    constructor(public id: number,
               public nombre: string){}
  }

  class Profesor{
    constructor(public id: number,
               public nombre: string,
			   public apellidos: string){}
  }


@Component({
  selector: 'app-alta-curso',
  templateUrl: './alta-curso.component.html',
  styleUrls: ['./alta-curso.component.css']
})
export class AltaCursoComponent implements OnInit {

    profesores: Profesor[] = [];
    niveles: Nivel[] = [];

    CursoForm = new CursoForm();

    constructor(protected profesoresService : ProfesoresService,
              protected nivelesService : NivelesService,
              protected catalogo : CatalogoCursosService,
              public snackBar: MatSnackBar){

    }

    ngOnInit() {
      this.profesoresService.getProfesores()
      .subscribe(
        (data) => {
          for (var i in data) {
            this.profesores.push(new Profesor(data[i].id, data[i].nombre, data[i].apellidos));
          };
        },
        (error) => {
          console.error(error);
        }
      );

      this.nivelesService.getNiveles()
      .subscribe(
        (data) => {
          for (var i in data) {
          //data.forEach(function(element){
            this.niveles.push(new Nivel(data[i].id, data[i].nombre));
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }

    onSubmit(f: NgForm){
      this.catalogo.altaCurso(this.CursoForm).subscribe(
        (data) => {
          this.snackBar.open("Curso dado de alta", "Correcto", { duration: 2000,});
          f.reset();
        },
        (error) => {
          this.snackBar.open("Algo fallo", "Ok", { duration: 5000,});
          }
      );
    }

}
