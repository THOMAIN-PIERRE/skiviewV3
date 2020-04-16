import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormCarnetComponent } from './form_carnet/form-carnet/form-carnet.component';
import { SanteService } from "./services/sante.service";
import { DataService } from "./services/data.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        FormCarnetComponent
    ],
    providers:[SanteService, DataService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
