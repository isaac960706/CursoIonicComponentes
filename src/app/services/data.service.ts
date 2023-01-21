import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Listado } from 'src/app/interface/interfaz';
import { heroes } from '../interface/interfaz';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //para consumir json de la web en el archivo app.module se crel el clientHTTp
  constructor( private Http: HttpClient) { }
  // se usa en el page de list
  getUsuarioos(){
    return this.Http.get('https://jsonplaceholder.typicode.com/users');
  }
  // para el search
  getAlbunes(){
    return this.Http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  //para llamar las opciones de inicio
  getMenuOp(){
    return this.Http.get<Listado[]>('/assets/data/meno-Opciones.json');
  }
  //para llamar las opciones los herores
  getHeroes(){
    return this.Http.get<heroes[]>('/assets/data/superheroes.json')
    .pipe(
      delay(2500)
    );
  }

}
