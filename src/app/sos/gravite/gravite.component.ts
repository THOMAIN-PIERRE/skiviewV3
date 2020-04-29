import { Component, OnInit } from '@angular/core';
import { SosService } from '../service/sos.service';

@Component({
  selector: 'ns-gravite',
  templateUrl: './gravite.component.html',
  styleUrls: ['./gravite.component.css']
})
export class GraviteComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
gravitesos(gravite:string){
  this.SosServ.sos.gravite=gravite;
}
}