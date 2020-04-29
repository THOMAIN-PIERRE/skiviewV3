import { Component, OnInit } from '@angular/core';
import { SosService } from '../service/sos.service';
@Component({
  selector: 'ns-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
  activitesos(activite:string){
    this.SosServ.sos.activite=activite;
  }
}

