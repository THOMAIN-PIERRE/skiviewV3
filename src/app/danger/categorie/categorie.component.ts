import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { DangerService } from '../serviceDanger/danger.service';

@Component({
  selector: 'ns-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(public DangerServ:DangerService) { }

  ngOnInit(): void {
  }

  categorieDanger(etat:string){
    this.DangerServ.danger.categorie = categorie;
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
