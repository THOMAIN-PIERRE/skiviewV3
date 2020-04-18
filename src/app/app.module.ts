import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


import { DataService } from "./services/data.service";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { CarnetSanteService } from "./services/carnet-sante.service";
import { IdService } from "./services/id.service";
import { CarnetrempliComponent } from "./carnet/carnetrempli/carnetrempli.component";
import { FormulaireComponent } from "./carnet/formulaire/formulaire.component";
import { CguComponent } from "./carnet/cgu/cgu.component";


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
        CguComponent,
        FormulaireComponent,
        CarnetrempliComponent
    ],
    providers:[CarnetSanteService, DataService, IdService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
