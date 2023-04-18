import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from '../shared/page-not-found-component/page-not-found-component.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    // component: DashboardComponent,
    children: [
      { path: '', redirectTo: '**', pathMatch: 'full' },
      { path: 'home', component: DashboardComponent, },
      { path: '**', component: PageNotFoundComponentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
