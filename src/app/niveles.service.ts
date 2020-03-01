import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {

  constructor(protected http: HttpClient) { }

  getNiveles(){
    return this.http.get('http://localhost:8080/niveles')
  }
}
