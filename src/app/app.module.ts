import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormCarnetComponent } from './form_carnet/form-carnet/form-carnet.component';
import { SanteService } from "./services/sante.service";
import { DataService } from "./services/data.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { AccueilCarnetSanteComponent } from './carnetSante/accueil-carnet-sante/accueil-carnet-sante.component';
import { CguComponent } from './carnetSante/cgu/cgu.component';
import { FormulaireComponent } from './carnetSante/formulaire/formulaire.component';
import { CarnetRempliComponent } from './carnetSante/carnet-rempli/carnet-rempli.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        FormCarnetComponent,
        AccueilCarnetSanteComponent,
        CguComponent,
        FormulaireComponent,
        CarnetRempliComponent
    ],
    providers:[SanteService, DataService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
