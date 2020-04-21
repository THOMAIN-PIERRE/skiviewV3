import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  routerExtensions: any;

  constructor(routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
  }
  goBack(): void {
    this.routerExtensions.back();
  }
}
