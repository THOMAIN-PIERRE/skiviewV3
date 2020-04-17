import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DangerRoutingModule } from './danger-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CategorieComponent } from './categorie/categorie.component';
import { PhotoComponent } from './photo/photo.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { ConfirmationEnvoiComponent } from './confirmation-envoi/confirmation-envoi.component';
import { ServicesComponent } from './services/services.component';
import { HistoriqueSignalementComponent } from './historique-signalement/historique-signalement.component';
import { FicheSignalementComponent } from './fiche-signalement/fiche-signalement.component';


@NgModule({
  declarations: [CategorieComponent, PhotoComponent, RecapitulatifComponent, ConfirmationEnvoiComponent, ServicesComponent, HistoriqueSignalementComponent, FicheSignalementComponent],
  imports: [
    DangerRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DangerModule { }
