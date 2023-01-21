import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';



  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  //controlador alert
  async presentAlert() {
    const alert = await this.alertCtrl.create(
      {
        backdropDismiss: false,
        header: 'Alert',
        subHeader: 'Important message',
        message: 'Este es un una alerta!',
        buttons: ['OK'],
      });

    await alert.present();
  }

  // botonos alerta

  async presentButtonsAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alerta!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.handlerMessage = 'Alerta Cancelada';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alerta confirmada';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `descartado del rol: ${role}`;
  }


  // alrta con un formulario
  async formularioClick() {
    const alert = await this.alertCtrl.create({
      header: 'Registrate',
      buttons: [
        {
          text: 'cancela',
          role: 'cancel',
          cssClass: 'secondary',
          
          handler: () => {
            this.handlerMessage = 'Alerta confirmada';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: ( data: any) => {
            this.handlerMessage = 'datos enviados';
            this.handlerMessage = data;
            console.log(data);
          },
        },
        
      ],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],

    });

    await alert.present();

    

  
  }
}
