import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    ConfirmationRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ConfirmationModule { }
