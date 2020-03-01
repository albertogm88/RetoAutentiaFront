import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import{ CatalogoCursosService } from '../catalogo-cursos.service'

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

  cursos: any[] = [];

  itemsPerPage: number = 3;
  totalItems: any;
  page: number = 1;

  constructor(protected catalogo : CatalogoCursosService, private changeDetectorRef: ChangeDetectorRef){
  }

  ngOnInit() {
    this.catalogo.getCatalogo(0)
    .subscribe(
      (data) => {
        this.cursos = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

    this.catalogo.getCountCursos()
    .subscribe(
      (data) => {
        this.totalItems = data;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  cargarPagina(page: number) {
    this.page = page;
    this.catalogo.getCatalogo(page)
    .subscribe(
      (data) => {
        this.cursos = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
