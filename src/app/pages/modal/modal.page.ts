import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  message = 'This modal example uses the modalController to present and dismiss modals.';

  //se inyecta el ModalController

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async  mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
    });
    modal.present();

    const {data, role} = await modal.onWillDismiss();

    if(role === 'Enviar'){
      this.message  =  `Hola, ${data}!`;
    }
  }

}
