import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseModule } from './browse/browse.module';
import { HomeModule } from './home/home.module';
import { SalesModule } from './sales/sales.module';
import { StoresModule } from './stores/stores.module';

@NgModule({
  declarations: [
    AppComponent,
    BrowseModule,
    HomeModule,
    StoresModule,
    SalesModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
