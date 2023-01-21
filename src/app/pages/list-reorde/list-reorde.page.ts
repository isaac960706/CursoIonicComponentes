import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorde',
  templateUrl: './list-reorde.page.html',
  styleUrls: ['./list-reorde.page.scss'],
})
export class ListReordePage implements OnInit {

  personajes: String[] = ['Son Goku', 'Vegeta', 'Bills', 'Giren', 'Gohan',];
 
  public botoncito = false;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    console.log("evento: ", event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0 , itemMover);

    console.log("personajes: ", this.personajes);

    event.detail.complete();

  }

  toggleReorder() {
    this.botoncito = !this.botoncito;
  }

}
