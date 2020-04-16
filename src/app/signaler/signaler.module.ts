import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SignalerRoutingModule } from './signaler-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SignalerComponent } from './signaler/signaler.component';


@NgModule({
  declarations: [SignalerComponent],
  imports: [
    SignalerRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SignalerModule { }
