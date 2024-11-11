import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderA11yComponent } from './header/header-a11y/header-a11y.component';
import { FooterA11yComponent } from './footer/footer-a11y/footer-a11y.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderA11yComponent,
    FooterA11yComponent,
    AccueilComponent,
    Page1Component,
    Page2Component
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
