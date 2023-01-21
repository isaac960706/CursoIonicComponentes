import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  
  nombre: String=''; 
  constructor(private modalCtrl: ModalController  ) { }

  ngOnInit() {
  }

  Cancelar() {
    return this.modalCtrl.dismiss(null, 'Cancelar');
  }

  Enviar() {
    return this.modalCtrl.dismiss(this.nombre, 'Enviar');
  }

}
