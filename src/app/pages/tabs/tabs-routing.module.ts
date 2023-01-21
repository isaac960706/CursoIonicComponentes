import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/tab3',
    pathMatch:'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'tab1',
      loadChildren: () => import('../segment/segment.module').then(m => m.SegmentPageModule)
    }, {
      path: 'tab2',
      loadChildren: () => import('../grid/grid.module').then(m => m.GridPageModule)
    },
    {
      path: 'tab3',
      loadChildren: () => import('../slide/slide.module').then(m => m.SlidePageModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
