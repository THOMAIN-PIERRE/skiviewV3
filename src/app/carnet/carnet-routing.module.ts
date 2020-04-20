import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AccueilcarnetComponent } from './accueilcarnet/accueilcarnet.component';
import { CguComponent } from './cgu/cgu.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CarnetrempliComponent } from './carnetrempli/carnetrempli.component';


const routes: Routes = [{path:"",component:AccueilcarnetComponent},
                        {path:"/cgu",component:CguComponent},
                        {path:"/formulaire",component:FormulaireComponent},
                        {path:"/carnetrempli",component:CarnetrempliComponent}
                       ];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CarnetRoutingModule { }
