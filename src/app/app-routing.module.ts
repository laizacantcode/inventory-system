import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: CreateproductComponent },
  { path: 'view/:id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
