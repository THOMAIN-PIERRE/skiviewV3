import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MediaRoutingModule } from './media-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MediaComponent } from './media/media.component';


@NgModule({
  declarations: [MediaComponent],
  imports: [
    MediaRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MediaModule { }
