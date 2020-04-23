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
            camera.takePicture();
        }, 
        function failure() {
            alert('Camera permissions not granted.');
        }
    );
}
  
}
