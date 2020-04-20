import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { InformationsRoutingModule } from './informations-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { InformationsComponent } from './informations/informations.component';
import { MeteoComponent } from './meteo/meteo.component';
import { NeigeComponent } from './neige/neige.component';
import { PistesComponent } from './pistes/pistes.component';
import { RemonteesComponent } from './remontees/remontees.component';


@NgModule({
  declarations: [InformationsComponent, MeteoComponent, NeigeComponent, PistesComponent, RemonteesComponent],
  imports: [
    InformationsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InformationsModule { }
