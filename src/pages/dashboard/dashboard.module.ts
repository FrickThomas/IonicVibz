import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { DashboardPage } from './dashboard';
 
@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    SuperTabsModule
  ],
})
export class DashboardPageModule {}