import { Component, OnInit } from '@angular/core';
import { DataService } from '~/app/services/data.service';

@Component({
  selector: 'ns-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  constructor(public dataServ:DataService) { }

  ngOnInit(): void {
  }

}
