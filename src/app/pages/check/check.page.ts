import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [{
    nombre: 'danger',
    estado: false
  },
  {
    nombre: 'success',
    estado: true
  },
  {
    nombre: 'warning',
    estado: false
  },
  {
    nombre: 'tertiary',
    estado: true
  },
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick(check: any) {
    console.log(check);
  }

  verESTado() {
    console.log(this.data);
  }

}
