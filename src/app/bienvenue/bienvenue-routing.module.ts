import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BienvenueComponent } from './bienvenue/bienvenue.component';


const routes: Routes = [
  {path: "", component:BienvenueComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class BienvenueRoutingModule { }
