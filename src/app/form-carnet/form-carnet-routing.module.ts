import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { FormCarnetComponent } from '../form_carnet/form-carnet/form-carnet.component';


const routes: Routes = [
  {path: "", component:FormCarnetComponent}
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FormCarnetRoutingModule { }
