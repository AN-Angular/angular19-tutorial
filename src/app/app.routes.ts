import { Routes } from '@angular/router';
import { AboutComponent } from './routing-demo/about/about.component';
import { HomeComponent } from './routing-demo/home/home.component';
import { ContactComponent } from './routing-demo/contact/contact.component';
import { PageNotFoundComponent } from './routing-demo/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent}
];
