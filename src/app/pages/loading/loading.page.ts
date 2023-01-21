import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor( private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }

  MostrarCarga(){
    this.showLoading();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000,
      spinner: 'circles',
     
    });

    loading.present();
  }

}
