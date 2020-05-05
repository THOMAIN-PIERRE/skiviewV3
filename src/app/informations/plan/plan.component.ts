import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {registerElement } from "nativescript-angular/element-registry";
import { Mapbox, MapboxMarker, MapboxViewApi } from "nativescript-mapbox";

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@Component({
    selector: "ns-plan",
    templateUrl: "./plan.component.html"
})
export class PlanComponent implements OnInit {


    mapbox: MapboxViewApi;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    
    onMapReady(args) {
        this.mapbox = args.map;
    }

    addMarkers() {
        const firstMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97724,
            lng: -0.73905,
            title: "BRACA",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const secondMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97664,
            lng: -0.74713,
            title: "LES OURSONS",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const thirdMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97692,
            lng: -0.74620,
            title: "LES MARMOTTES",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const fourthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97461,
            lng: -0.74661,
            title: "LES SAPINS",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const fifthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97366,
            lng: -0.74857,
            title: "ARLAS",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const sixthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97718,
            lng: -0.75044,
            title: "MASSARE 2",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const seventhMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97461,
            lng: -0.75426,
            title: "PLUVIOMETRE",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const eightMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97281,
            lng: -0.75586,
            title: "CONTREBANDIERS",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const ninethMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97475,
            lng: -0.72876,
            title: "LE FAMILY",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const tenthMarker = <MapboxMarker>{
            id: 2,
            lat: 42.97724,
            lng: -0.73905,
            title: "LE FAMILY",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };

        const eleventhMarker = <MapboxMarker>{
            id: 2,
            lat: 42.96674,
            lng: -0.72155,
            title: "LE PANORAMIQUE",
            subtitle: "OUVERT",
            // icon: "http(s)://website/coolimage.png",
            // iconPath: "res/markers/home_markers.png",
            // selected: true,
            onTap: marker => console.log("Marker tapped with title: '" + marker.title + "'"),
            onCalloutTap: marker => alert("Marker callout tapped with title: '" + marker.title + "'")
        };


        this.mapbox.addMarkers([
            firstMarker, secondMarker, thirdMarker, fourthMarker, fifthMarker, sixthMarker, seventhMarker, eightMarker, ninethMarker, tenthMarker, eleventhMarker
        ]);
    }

        onDrawerButtonTap(): void {
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.showDrawer();
        }
    }
