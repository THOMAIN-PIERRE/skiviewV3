import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-choixstation',
  templateUrl: './choixstation.component.html',
  styleUrls: ['./choixstation.component.css']
})
export class ChoixstationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log("Choix station chargé dans le routeur");
  }

}
