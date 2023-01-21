import { Component } from '@angular/core';
import { Listado } from './interface/interfaz';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {


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
