import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CursoForm } from './model/cursoForm';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CatalogoCursosService {

  constructor(protected http: HttpClient) { }

  getCatalogo(pagina: number): Observable<any>{
            console.log("Cargar cursos " + pagina);
    return this.http.get('http://localhost:8080/cursos?activos=1&pag='+pagina)
  }

  altaCurso(_body: CursoForm){
    return this.http.post('http://localhost:8080/cursos/', _body)
  }

  getCountCursos(){
    return this.http.get('http://localhost:8080/cursos?activos=1&todos=S')
  }

}
