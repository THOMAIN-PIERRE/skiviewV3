import { Component, OnInit } from '@angular/core';
import * as camera from "nativescript-camera";

@Component({
  selector: 'ns-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {


  ngOnInit(): void {
    
  }
  takePicture() {
    camera.requestPermissions().then(
        function success() {
            camera.takePicture({
              width: 700,
              height: 1000,
              keepAspectRatio: true})
        }, 
        function failure() {
            alert('Camera permissions not granted.');
        }
    );
}
  
}
