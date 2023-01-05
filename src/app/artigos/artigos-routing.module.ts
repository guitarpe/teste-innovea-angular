import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtigosComponent } from './artigos/artigos.component';

const routes: Routes = [
  { path: '', component: ArtigosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtigosRoutingModule { }
