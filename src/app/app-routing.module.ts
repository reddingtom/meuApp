import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./pages/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'politicas-de-privacidade',
    loadChildren: () => import('./pages/politicas-de-privacidade/politicas-de-privacidade.module').then( m => m.PoliticasDePrivacidadePageModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/p404/p404.module').then( m => m.P404PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pages/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
