import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MarketComponent } from './market/market.component';
import { UsingComponent } from './using/using.component';
import { FinalFinanceComponent } from './final-finance/final-finance.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'using',
    component: UsingComponent
  },
  {
    path: 'final-finance',
    component: FinalFinanceComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
