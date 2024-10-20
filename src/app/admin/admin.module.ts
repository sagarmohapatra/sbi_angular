import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { InventorystatusComponent } from './inventorystatus/inventorystatus.component';
import { DevicedeliveryComponent } from './devicedelivery/devicedelivery.component';
import { ReportsComponent } from './reports/reports.component';
import { HelpandSupportComponent } from './helpand-support/helpand-support.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DeviceListComponent,
    InventorystatusComponent,
    DevicedeliveryComponent,
    ReportsComponent,
    HelpandSupportComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    
  ]
})
export class AdminModule { }
