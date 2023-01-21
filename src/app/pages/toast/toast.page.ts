import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor( private toastC:ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastC.create({
      message: 'Hello World!',
      duration: 2500,
      icon: 'globe'
    });

    await toast.present();
  }

  async presentToast2() {
    const toast = await this.toastC.create({
      message: 'Hello!',
      icon: 'thunderstorm',
      // duration: 8000,
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ],
    });

    await toast.present();
  }

}
