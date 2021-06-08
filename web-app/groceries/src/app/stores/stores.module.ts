import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresHomeComponent } from './stores-home/stores-home.component';


@NgModule({
  declarations: [
    StoresHomeComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule
  ]
})
export class StoresModule { }
