import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ArtigosRoutingModule } from './artigos-routing.module';
import { ArtigosComponent } from './artigos/artigos.component';

@NgModule({
  declarations: [
    ArtigosComponent
  ],
  imports: [
    CommonModule,
    ArtigosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})

export class ArtigosModule { }
