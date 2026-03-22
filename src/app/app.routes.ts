import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'page-01', pathMatch: 'full' },
  { path: 'page-01', loadComponent: () => import('./pages/page-01/page-01').then(m => m.Page01), title: 'Page 01' },
  { path: 'page-02', loadComponent: () => import('./pages/page-02/page-02').then(m => m.Page02), title: 'Page 02' },
  { path: 'page-03', loadComponent: () => import('./pages/page-03/page-03').then(m => m.Page03), title: 'Page 03' },
  { path: 'page-04', loadComponent: () => import('./pages/page-04/page-04').then(m => m.Page04), title: 'Page 04' },
  { path: 'page-05', loadComponent: () => import('./pages/page-05/page-05').then(m => m.Page05), title: 'Page 05' },
  { path: 'page-06', loadComponent: () => import('./pages/page-06/page-06').then(m => m.Page06), title: 'Page 06' },
  { path: 'page-07', loadComponent: () => import('./pages/page-07/page-07').then(m => m.Page07), title: 'Page 07' },
  { path: 'page-08', loadComponent: () => import('./pages/page-08/page-08').then(m => m.Page08), title: 'Page 08' },
  { path: 'page-09', loadComponent: () => import('./pages/page-09/page-09').then(m => m.Page09), title: 'Page 09' },
  { path: 'page-10', loadComponent: () => import('./pages/page-10/page-10').then(m => m.Page10), title: 'Page 10' },
];
