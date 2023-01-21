import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  datos: any[] = Array(20);
  items: string[] = []

  @ViewChild(IonInfiniteScroll, { static: false }) inifiniteScroll!: IonInfiniteScroll;


  constructor() { }

  ngOnInit() {
    this.gerarItems();
  }

  loadData(event: any) {
    // console.log("event: ", event);



    setTimeout(() => {

      if (this.datos.length > 50) {
        this.inifiniteScroll.complete();
        this.inifiniteScroll.disabled = true;
        return;
      }

      const newArray = Array(20);
      this.datos.push(...newArray);
      // event.target.complete();
      this.inifiniteScroll.complete();
    }, 1500);
  }

  private gerarItems() {
    const serie  = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
     
      this.items.push(`Item ${serie + i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.gerarItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
