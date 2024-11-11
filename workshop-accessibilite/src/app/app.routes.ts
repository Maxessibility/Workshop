import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

export const routes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

