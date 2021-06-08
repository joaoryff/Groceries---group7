import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresHomeComponent } from './stores-home/stores-home.component';

const routes: Routes = [
  {path: 'stores', component: StoresHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
