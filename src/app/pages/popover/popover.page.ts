import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {




  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async MostrarVentana(e: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: e,
      translucent:true,
      backdropDismiss: false
    });

     await popover.present();
     const {data} = await popover.onWillDismiss();
     console.log("data: ", data);

  }


}
