import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  musica: any[] = [];
  textoBuscar: string = '';

  constructor(private dataSer: DataService) { }

  ngOnInit() {
    this.dataSer.getAlbunes().subscribe(musica => {
      this.musica = musica;
    })
  }

  onSearchChange(ev: any) {
    this.textoBuscar = ev.detail.value;
  }
}
