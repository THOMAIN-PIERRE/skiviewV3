import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { SosRoutingModule } from './sos-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AccueilSosComponent } from './accueil-sos/accueil-sos.component';
import { EtatComponent } from './etat/etat.component';
import { GraviteComponent } from './gravite/gravite.component';
import { AppelComponent } from './appel/appel.component';
import { NatureComponent } from './nature/nature.component';
import { ActiviteComponent } from './activite/activite.component';
import { BlessureComponent } from './blessure/blessure.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [AccueilSosComponent, EtatComponent, GraviteComponent, AppelComponent, NatureComponent, ActiviteComponent, BlessureComponent, ServicesComponent],
  imports: [
    SosRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SosModule { }
