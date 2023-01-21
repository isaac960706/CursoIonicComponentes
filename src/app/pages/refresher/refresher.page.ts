import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  // lista : any[] = Array(20);
  lista : any [] = [];
  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      this.lista = Array(25);
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

}
