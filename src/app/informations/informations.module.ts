import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { InformationsRoutingModule } from './informations-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { InformationsComponent } from './informations/informations.component';


@NgModule({
  declarations: [InformationsComponent],
  imports: [
    InformationsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InformationsModule { }
