import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReordePage } from './list-reorde.page';

const routes: Routes = [
  {
    path: '',
    component: ListReordePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListReordePageRoutingModule {}
