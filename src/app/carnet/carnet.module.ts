import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CarnetRoutingModule } from './carnet-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AccueilcarnetComponent } from './accueilcarnet/accueilcarnet.component';
import { CguComponent } from './cgu/cgu.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CarnetrempliComponent } from './carnetrempli/carnetrempli.component';


@NgModule({
  declarations: [AccueilcarnetComponent, CguComponent, FormulaireComponent, CarnetrempliComponent],
  imports: [
    CarnetRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CarnetModule { }
