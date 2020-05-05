import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarnetSanteService {
  dossierSante: any;

  constructor() {
      this.dossierSante = {
          nom:"Lassalle",
          prenom:"Benoît",
          age:"35",
          tel:"0707070707",
          groupe:"0+",
          taille: "180",
          poids: "70",
          donneur:"AB",
          allergie:["Néant"],
          pathologie:["Diabète"],
          traitement:["Insuline", "Doliprane"],
          nom_contact: "Aloin",
          prenom_contact:"Baptiste",
          tel_contact:"0606060606",

      };
  }
}