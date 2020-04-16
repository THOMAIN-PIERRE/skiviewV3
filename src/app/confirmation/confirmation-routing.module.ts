import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes: Routes = [
  {path:"", component:ConfirmationComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ConfirmationRoutingModule { }
