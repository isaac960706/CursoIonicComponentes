import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  //se agrega solito cuando se genera una pagina o tutas siguiente comando 
  // ionic g page pages/inicio --spec=false
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },/////ionic g page pages/alert --spec=false
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'fab-button',
    loadChildren: () => import('./pages/fab-button/fab-button.module').then( m => m.FabButtonPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-reorde',
    loadChildren: () => import('./pages/list-reorde/list-reorde.module').then( m => m.ListReordePageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./pages/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./pages/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./pages/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/toast/toast.module').then( m => m.ToastPageModule)
  },
  /* se comento por que esta no es una pagina si no una vemtana pero es 
  necesario crear la como PAGE*/
  // {
  //   path: 'modal-info',
  //   loadChildren: () => import('./pages/modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules
     })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
