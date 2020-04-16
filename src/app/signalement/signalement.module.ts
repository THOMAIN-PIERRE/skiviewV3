import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SignalementRoutingModule } from './signalement-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SignalementComponent } from './signalement/signalement.component';


@NgModule({
  declarations: [SignalementComponent],
  imports: [
    SignalementRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SignalementModule { }
