import { Routes } from '@angular/router';
import { AboutComponent } from './routing-demo/about/about.component';
import { HomeComponent } from './routing-demo/home/home.component';
import { ContactComponent } from './routing-demo/contact/contact.component';
import { PageNotFoundComponent } from './routing-demo/page-not-found/page-not-found.component';

export const routes: Routes = [
    // { path: 'contact', component: ContactComponent },
    { path: 'contact', loadComponent: () => import('./routing-demo/contact/contact.component').then(c => c.ContactComponent) },
    { path: '', component: HomeComponent },
    // { path: 'home', loadComponent: () => import('./routing-demo/home/home.component').then(c => c.HomeComponent) },
    { path: 'about', component: AboutComponent },
    // { path: 'about', loadComponent: () => import('./routing-demo/about/about.component').then(c => c.AboutComponent) },
    { path: '**', component: PageNotFoundComponent}
];
