import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ServicesComponent } from './services/services.component';
import { CreationcompteComponent } from './creationcompte/creationcompte.component';


@NgModule({
  declarations: [GestionCompteComponent, InscriptionComponent, ConnexionComponent, ServicesComponent, CreationcompteComponent],
  imports: [
    UtilisateurRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UtilisateurModule { }
