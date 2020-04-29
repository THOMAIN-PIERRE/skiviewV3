import { Component, OnInit } from '@angular/core';
import { SosService } from '../service/sos.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
@Component({
  selector: 'ns-blessure',
  templateUrl: './blessure.component.html',
  styleUrls: ['./blessure.component.css']
})
export class BlessureComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
  causeblessuresos(causeblessure:string){
    this.SosServ.sos.causeblessure=causeblessure;
  }
  typeblessuresos(typeblessure:string){
    this.SosServ.sos.typeblessure=typeblessure;
  }
  submit() {
    dialogs.confirm({
      title: "Reception des Complements d'Informations",
      message: "Les secours sont prevenus,Ils seront bientot à vos cotés.Restez calme,Respirez profondement,Respirez Calmement",
      okButtonText: "Retour à la page d'accueil",
      cancelButtonText: "",
      neutralButtonText: ""
    })
  }
}
