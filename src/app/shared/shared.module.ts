import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    InfoDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
