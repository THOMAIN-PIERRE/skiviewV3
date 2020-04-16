import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BienvenueRoutingModule } from './bienvenue-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BienvenueComponent } from './bienvenue/bienvenue.component';


@NgModule({
  declarations: [BienvenueComponent],
  imports: [
    BienvenueRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BienvenueModule { }
