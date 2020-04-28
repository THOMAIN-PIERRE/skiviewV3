import { Component, OnInit } from '@angular/core';
import * as camera from "nativescript-camera";

@Component({
  selector: 'ns-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.css']
})
export class GestionCompteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  takePicture() {
    camera.requestPermissions().then(
        function success() {
            camera.takePicture({
              width: 100,
              height: 100,
              keepAspectRatio: true})
        }, 
        function failure() {
            alert('Camera permissions not granted.');
        }
    );
}
}
