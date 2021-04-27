import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [

  {
    path: 'employeeDashboard',
    component: EmployeeDashboardComponent, 
  },
  {
    path: 'test',
    component: TestComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
