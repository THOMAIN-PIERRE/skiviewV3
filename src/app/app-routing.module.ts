import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "signalement", loadChildren: () => import("~/app/signalement/signalement.module").then((m) => m.SignalementModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "bienvenue", loadChildren: () => import("~/app/bienvenue/bienvenue.module").then((m) => m.BienvenueModule) },
    { path: "form-carnet", loadChildren: () => import("~/app/form-carnet/form-carnet.module").then((m) => m.FormCarnetModule) },
    { path: "formulaire", loadChildren: () => import("~/app/formulaire/formulaire.module").then((m) => m.FormulaireModule) },
    { path: "media", loadChildren: () => import("~/app/media/media.module").then((m) => m.MediaModule) },
    { path: "media2", loadChildren: () => import("~/app/media2/media2.module").then((m) => m.Media2Module) },
    { path: "signaler", loadChildren: () => import("~/app/signaler/signaler.module").then((m) => m.SignalerModule) },
    { path: "confirmation", loadChildren: () => import("~/app/confirmation/confirmation.module").then((m) => m.ConfirmationModule) },
    { path: "fiche", loadChildren: () => import("~/app/fiche/fiche.module").then((m) => m.FicheModule) },
    { path: "informations", loadChildren: () => import("~/app/informations/informations.module").then((m) => m.InformationsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
