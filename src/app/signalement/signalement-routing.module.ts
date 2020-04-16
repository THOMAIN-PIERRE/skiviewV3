import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SignalementComponent } from './signalement/signalement.component';


const routes: Routes = [
  {path: "", component: SignalementComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SignalementRoutingModule { }
