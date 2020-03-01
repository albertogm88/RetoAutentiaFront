import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(protected http: HttpClient) { }

  getProfesores(){
    return this.http.get('http://localhost:8080/profesores')
  }
}
