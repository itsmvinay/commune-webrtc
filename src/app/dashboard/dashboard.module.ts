import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallHistoryComponent } from './call-history/call-history.component';
import { WebRtcConnectComponent } from './web-rtc-connect/web-rtc-connect.component';



@NgModule({
  declarations: [
    CallHistoryComponent,
    WebRtcConnectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
