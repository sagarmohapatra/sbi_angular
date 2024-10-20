import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserMangementModule } from './user-mangement/user-mangement.module';
import { DevicedeliveryComponent } from '../admin/devicedelivery/devicedelivery.component';
import { InventorystatusComponent } from './inventorystatus/inventorystatus.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ReportsComponent } from './reports/reports.component';
import { HelpandSupportComponent } from './helpand-support/helpand-support.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'usermanagment',
        component:UserMangementModule
      },
      {
        path: 'devicelist',
        component:DevicedeliveryComponent
      },
      {
        path: 'inventory',
       component:InventorystatusComponent
      },
      {
        path: 'devicedelivery',
        component:DeviceListComponent
      },
      {
        path: 'reports',
        component:ReportsComponent
      },
      {
        path: 'helpSuppert',
        component:HelpandSupportComponent
      },
      {
        path: 'notification',
        component:NotificationComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
