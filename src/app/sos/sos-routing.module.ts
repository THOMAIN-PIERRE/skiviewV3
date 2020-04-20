import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AccueilSOSComponent } from './accueil-sos/accueil-sos.component';
import { ActiviteComponent } from './activite/activite.component';
import { AppelComponent } from './appel/appel.component';
import { BlessureComponent } from './blessure/blessure.component';
import { EtatComponent } from './etat/etat.component';
import { GestesecoursComponent } from './gestesecours/gestesecours.component';
import { GraviteComponent } from './gravite/gravite.component';
import { NatureComponent } from './nature/nature.component';


const routes: Routes = [
  {
    path: "", component: AccueilSOSComponent, children: [
      { path: "activite", component: ActiviteComponent },
      { path: "appel", component: AppelComponent },
      { path: "blessure", component: BlessureComponent },
      { path: "etat", component: EtatComponent },
      { path: "gestesecours", component: GestesecoursComponent },
      { path: "gravite", component: GraviteComponent },
      { path: "nature", component: NatureComponent }]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SosRoutingModule { }
