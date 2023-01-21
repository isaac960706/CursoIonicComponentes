import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  //manipular el hijo de ilist
  @ViewChild('listaAlfa', {static:false}) lista :IonList | any;

    //variable usuario
    usuarios:  Observable<any> | undefined;
  //se llama los parametrod para un servicio
  constructor( private dataSer:DataService) { }

  ngOnInit() {

  this.usuarios = this.dataSer.getUsuarioos();

  }

  editar(user:any){
    console.log('editar',user);
    this.lista.closeSlidingItems();

  }

  favorito(user:any){
    console.log('favorito',user);

    this.lista.closeSlidingItems();
  }

  eliminar(user:any){
    console.log('eliminar',user);
    this.lista.closeSlidingItems();

  }

}
