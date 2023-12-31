import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/compos/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BindingsComponent } from './demo/bindings/bindings.component';
import { DirectivesComponent } from './demo/directives/directives.component';
import { ChildComponent } from './demo/input-output/child/child.component';
import { ParentComponent } from './demo/input-output/parent/parent.component';
import { PipesComponent } from './demo/pipes/pipes.component';
import { FakeAuthComponent } from './demo/services/fake-auth/fake-auth.component';
import { AddEuroSymbolPipe } from './shared/pipes/add-euro-symbol.pipe';
import { LetterPipe } from './shared/pipes/letter-to-number.pipe';
import { ChronoComponent } from './exercices/chrono/chrono.component';
import { ShoppingCartComponent } from './exercices/shopping-cart/shopping-cart.component';
import { ArticleComponent } from './exercices/shopping-cart-2/article/article.component';
import { CartComponent } from './exercices/shopping-cart-2/cart/cart.component';
import { Article2Component } from './exercices/shopping-cart-3/article/article2.component';
import { AdvanceRoutageComponent } from './demo/advance-routage/advance-routage.component';
import { SubCompoRoutageComponent } from './demo/advance-routage/sub-compo-routage/sub-compo-routage.component';
import { GuardsComponent } from './demo/guards/guards.component';
import { GuardedCompoComponent } from './demo/guards/guarded-compo/guarded-compo.component';
import { RefreshPromiseComponent } from './demo/refresh-promise/refresh-promise.component';
import { ReactiveFormsComponent } from './demo/reactive-forms/reactive-forms.component';
import { HttpClientComponent } from './demo/http-client/http-client.component';
import { ObsComponent } from './demo/obs/obs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BindingsComponent,
    DirectivesComponent,
    ChildComponent,
    ParentComponent,
    PipesComponent,
    FakeAuthComponent,
    AddEuroSymbolPipe,
    LetterPipe,
    ChronoComponent,
    ShoppingCartComponent,
    ArticleComponent,
    CartComponent,
    Article2Component,
    AdvanceRoutageComponent,
    SubCompoRoutageComponent,
    GuardsComponent,
    GuardedCompoComponent,
    RefreshPromiseComponent,
    ReactiveFormsComponent,
    HttpClientComponent,
    ObsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
