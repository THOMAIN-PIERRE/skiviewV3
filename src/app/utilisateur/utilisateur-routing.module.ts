import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AccueilutilisateurComponent } from './accueilutilisateur/accueilutilisateur.component';
import { CguappliComponent } from './cguappli/cguappli.component';
import { ChoixstationComponent } from './choixstation/choixstation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreationcompteComponent } from './creationcompte/creationcompte.component';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [{path:"",component:AccueilutilisateurComponent},
                        {path:"/cguappli",component:CguappliComponent},
                        {path:"/choixstation",component:ChoixstationComponent},
                        {path:"/connexion",component:ConnexionComponent},
                        {path:"/creationcompte",component:CreationcompteComponent},
                        {path:"/gestioncompte",component:GestionCompteComponent},
                        {path:"/inscription",component:InscriptionComponent}
                       ];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class UtilisateurRoutingModule { }
