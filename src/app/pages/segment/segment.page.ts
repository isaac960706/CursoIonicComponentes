import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any> | undefined ;
  // mundo:string='todos';
  textoBuscar: string = '';

  constructor(private dataServ:DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataServ.getHeroes();
  }
  
  
  segmentChanged(event:any){
   
    this.textoBuscar = event.detail.value;
    // this.mundo = ev.detail.value;
  }


}
