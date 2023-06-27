import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from '../shared/page-not-found-component/page-not-found-component.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: '404', component: PageNotFoundComponentComponent },
      { path: '**', redirectTo: '404', pathMatch: 'full'  },
    ]
  },
  {
    path: '', component: DashboardComponent, pathMatch: 'prefix'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
