import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { ConfirmationEnvoiComponent } from './confirmation-envoi/confirmation-envoi.component';
import { FicheSignalementComponent } from './fiche-signalement/fiche-signalement.component';
import { HistoriqueSignalementComponent } from './historique-signalement/historique-signalement.component';
import { PhotoComponent } from './photo/photo.component';
import { Photo2Component } from './photo2/photo2.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';


const routes: Routes = [
  { path: "", component: CategorieComponent },
  { path: "/confirmation-envoi", component: ConfirmationEnvoiComponent },
  { path: "/fiche-signalement", component: FicheSignalementComponent },
  { path: "/historique-signalement", component: HistoriqueSignalementComponent },
  { path: "/photo", component: PhotoComponent },
  { path: "/photo2", component: Photo2Component },
  { path: "/recapitulatif", component: RecapitulatifComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class DangerRoutingModule { }
