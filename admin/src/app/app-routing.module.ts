import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularLandingComponent } from './angular-landing/angular-landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetrialTestingComponent } from './metrial-testing/metrial-testing.component';

const routes: Routes = [
  {
    path: 'materialTesting',
    component: MetrialTestingComponent
  },
  {
    path: 'angularDefault',
    component: AngularLandingComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
