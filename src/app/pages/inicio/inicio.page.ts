// se crea las variables en el siguite
// interface Listado {
//   icon: string;
//   name: string;
//   redirectTo: string;
// } se movieron a la carpeta interface y se creo una nueva importacion en este archivo


import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Listado } from 'src/app/interface/interfaz'; //********** */
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {
  // varible que binen de el html para ser cargasdos en el siguite json
  //
  
  listados: Observable<Listado[]> | any ;

  constructor(private menuCtrl: MenuController,
    private dataservicio: DataService) { }

  ngOnInit() {
    this.listados = this.dataservicio.getMenuOp();
  }

  MostrarMuenu() {
    this.menuCtrl.open('MenuUNO');
  }

}
