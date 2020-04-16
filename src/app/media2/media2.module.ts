import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { Media2RoutingModule } from './media2-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { Media2Component } from './media2/media2.component';


@NgModule({
  declarations: [Media2Component],
  imports: [
    Media2RoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class Media2Module { }
