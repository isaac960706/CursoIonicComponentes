import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPersonalizadoPipe } from './filtro-personalizado.pipe';



@NgModule({
  declarations: [
    FiltroPersonalizadoPipe
  ],
  exports:[
    FiltroPersonalizadoPipe
  ]
})
export class PipesModule { }
