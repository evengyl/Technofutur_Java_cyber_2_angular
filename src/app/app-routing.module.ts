import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingsComponent } from './demo/bindings/bindings.component';
import { DirectivesComponent } from './demo/directives/directives.component';
import { ParentComponent } from './demo/input-output/parent/parent.component';
import { PipesComponent } from './demo/pipes/pipes.component';
import { FakeAuthComponent } from './demo/services/fake-auth/fake-auth.component';
import { ChronoComponent } from './exercices/chrono/chrono.component';
import { ArticleComponent } from './exercices/shopping-cart-2/article/article.component';
import { Article2Component } from './exercices/shopping-cart-3/article/article2.component';
import { ShoppingCartComponent } from './exercices/shopping-cart/shopping-cart.component';
import { AdvanceRoutageComponent } from './demo/advance-routage/advance-routage.component';
import { SubCompoRoutageComponent } from './demo/advance-routage/sub-compo-routage/sub-compo-routage.component';
import { GuardsComponent } from './demo/guards/guards.component';
import { GuardedCompoComponent } from './demo/guards/guarded-compo/guarded-compo.component';
import { secuAccessGuard } from './demo/guards/secu-access.guard';
import { RefreshPromiseComponent } from './demo/refresh-promise/refresh-promise.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bindings', component: BindingsComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'services', component: FakeAuthComponent},
  {path: 'chrono', component: ChronoComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},
  {path: 'shoppingCartV2', component: ArticleComponent},
  {path: 'shoppingCartV3', component: Article2Component},
  {path: 'advanceRouting', component: AdvanceRoutageComponent},
  {path: 'subroutage', children : [
    { path : "", component : SubCompoRoutageComponent},
    { path : ":idProduct", component : SubCompoRoutageComponent}
  ]},
  {path : "guard", component : GuardsComponent},
  {path : "guarded", canActivate: [secuAccessGuard], component: GuardedCompoComponent},
  {path : "refreshPromise", component : RefreshPromiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }