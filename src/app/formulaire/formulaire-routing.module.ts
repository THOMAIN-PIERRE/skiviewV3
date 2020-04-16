import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  {path: "", component: FormulaireComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FormulaireRoutingModule { }
