import { Component, OnInit } from '@angular/core';
import { SosService } from '../service/sos.service';
@Component({
  selector: 'ns-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {

  constructor(public SosServ:SosService) { }

  ngOnInit(): void {
  }
  naturesos(nature:string){
    this.SosServ.sos.nature=nature;
  }
}
