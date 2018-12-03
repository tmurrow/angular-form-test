import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/customer'
  },
  {
    path: 'customer',
    component: CustomerComponent,
    data: {
      title: 'Test Form'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
