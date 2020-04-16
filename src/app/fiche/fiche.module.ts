import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FicheRoutingModule } from './fiche-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FicheComponent } from './fiche/fiche.component';


@NgModule({
  declarations: [FicheComponent],
  imports: [
    FicheRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FicheModule { }
