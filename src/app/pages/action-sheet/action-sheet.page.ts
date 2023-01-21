// se crea las variables en el siguite

import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  result: any;
  constructor(  private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick( ){

    this.presentActionSheet();

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Ejemplo de cabecera',
      subHeader: 'Ejemplo de Subcabecera',
      backdropDismiss:false,//se usa para q el usuario se fuerse a dar un click a una opcion
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Enviar',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close-circle-outline',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}


