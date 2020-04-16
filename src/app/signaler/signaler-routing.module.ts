import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SignalerComponent } from './signaler/signaler.component';

const routes: Routes = [
  {path:"", component:SignalerComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SignalerRoutingModule { }
