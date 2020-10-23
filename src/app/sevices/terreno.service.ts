import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import { url } from 'inspector';

const urlServicio='https://testvicabamba.herokuapp.com/equipo/'

@Injectable({
  providedIn: 'root'
})
export class TerrenoService {

  constructor(private http: HttpClient) { }
  obtenerTodos(): Observable<any>{
    return this.http.post(urlServicio+'/obtenerTodos','');
  }
  crear(data):Observable<any>{
    return this.http.post(urlServicio+'/crear',data)
  }
}
