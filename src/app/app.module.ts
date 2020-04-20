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
import { AccueilcarnetComponent } from "./carnet/accueilcarnet/accueilcarnet.component";
import { CategorieComponent } from "./danger/categorie/categorie.component";
import { ConfirmationEnvoiComponent } from "./danger/confirmation-envoi/confirmation-envoi.component";
import { FicheSignalementComponent } from "./danger/fiche-signalement/fiche-signalement.component";
import { HistoriqueSignalementComponent } from "./danger/historique-signalement/historique-signalement.component";
import { PhotoComponent } from "./danger/photo/photo.component";
import { Photo2Component } from "./danger/photo2/photo2.component";
import { RecapitulatifComponent } from "./danger/recapitulatif/recapitulatif.component";
import { InformationsComponent } from "./informations/informations/informations.component";
import { MeteoComponent } from "./informations/meteo/meteo.component";
import { NeigeComponent } from "./informations/neige/neige.component";
import { RemonteesComponent } from "./informations/remontees/remontees.component";
import { PistesComponent } from "./informations/pistes/pistes.component";
import { AccueilSOSComponent } from "./sos/accueil-sos/accueil-sos.component";
import { ActiviteComponent } from "./sos/activite/activite.component";
import { AppelComponent } from "./sos/appel/appel.component";
import { BlessureComponent } from "./sos/blessure/blessure.component";
import { EtatComponent } from "./sos/etat/etat.component";
import { GestesecoursComponent } from "./sos/gestesecours/gestesecours.component";
import { GraviteComponent } from "./sos/gravite/gravite.component";
import { NatureComponent } from "./sos/nature/nature.component";
import { AccueilutilisateurComponent } from "./utilisateur/accueilutilisateur/accueilutilisateur.component";
import { CguappliComponent } from "./utilisateur/cguappli/cguappli.component";
import { ChoixstationComponent } from "./utilisateur/choixstation/choixstation.component";
import { ConnexionComponent } from "./utilisateur/connexion/connexion.component";
import { CreationcompteComponent } from "./utilisateur/creationcompte/creationcompte.component";
import { GestionCompteComponent } from "./utilisateur/gestion-compte/gestion-compte.component";
import { InscriptionComponent } from "./utilisateur/inscription/inscription.component";


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
        CarnetrempliComponent,
        AccueilcarnetComponent,
        CategorieComponent,
        ConfirmationEnvoiComponent,
        FicheSignalementComponent,
        HistoriqueSignalementComponent,
        PhotoComponent,
        Photo2Component,
        RecapitulatifComponent,
        InformationsComponent,
        MeteoComponent,
        NeigeComponent,
        PistesComponent,
        RemonteesComponent,
        AccueilSOSComponent,
        ActiviteComponent,
        AppelComponent,
        BlessureComponent,
        EtatComponent,
        GestesecoursComponent,
        GraviteComponent,
        NatureComponent,
        AccueilutilisateurComponent,
        CguappliComponent,
        ChoixstationComponent,
        ConnexionComponent,
        CreationcompteComponent,
        GestionCompteComponent,
        InscriptionComponent

    ],
    providers:[CarnetSanteService, DataService, IdService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
