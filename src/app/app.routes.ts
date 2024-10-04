import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/auth/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'auth'},
    {path: 'auth', loadChildren: () => import('./components/auth/auth.routes').then((c) => c.routes)},
    {path: 'employer', loadChildren: () => import('./components/employer/employer.routes').then((c) => c.routes)},
    {path: '**', component: PageNotFoundComponent}
];