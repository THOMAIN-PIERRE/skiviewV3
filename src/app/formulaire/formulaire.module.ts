import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormulaireRoutingModule } from './formulaire-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FormulaireComponent } from './formulaire/formulaire.component';


@NgModule({
  declarations: [FormulaireComponent],
  imports: [
    FormulaireRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FormulaireModule { }
