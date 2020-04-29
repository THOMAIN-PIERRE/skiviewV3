import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SosService {
sos:any;
  constructor() {
    this.sos={
      etat:"",
      gravite:"",
      nature:"",
      activite:"",
      causeblessure:"",
      typeblessure:""
    };
   }
}

