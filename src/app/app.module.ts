import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/compos/nav/nav.component';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
