import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarnetSanteService {
  dossierSante: any;

  constructor() {
      this.dossierSante = {
          prenom: "Pierre",
          nom: "Thomain",
          taille: 180,
          poids: 80,
      };
  }
}