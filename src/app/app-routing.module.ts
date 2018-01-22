import { Routes, RouterModule, PreloadAllModules   } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './list/list.module#ListModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
];

export const AppRouting = RouterModule.forRoot(appRoutes, {
  useHash: true,
  preloadingStrategy: PreloadAllModules
});
