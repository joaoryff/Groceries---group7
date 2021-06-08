import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseHomeComponent } from './browse-home/browse-home.component';


@NgModule({
  declarations: [
    BrowseHomeComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
