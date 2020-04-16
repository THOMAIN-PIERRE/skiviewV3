import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Media2Component } from '../media2/media2/media2.component';


const routes: Routes = [
  {path:"", component:Media2Component}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class Media2RoutingModule { }
