import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DangerService {

danger:any;

  constructor() {
    this.danger = {
      categorie:"",
    }
   }
}
