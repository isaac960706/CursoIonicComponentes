import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [
    HeaderComponent,//se agrego el componente
    PopoverInfoComponent
  ],
  exports: [
    HeaderComponent,//se exporto el componente
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule//se imporot para q no salga eerrr en header html
  ]
})
export class ComponentsModule { }
