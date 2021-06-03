import { AfterViewInit, Component } from "@angular/core";
import { ico } from "@cloudinary/base/qualifiers/format";
import * as L from "leaflet";

@Component({
    selector: "location-component",
    templateUrl: "location.component.html",
    styleUrls: ["location.component.scss"]
})
export class LocationComponent implements AfterViewInit {
    private map: any;
    private initMap() : void {
        this.map = L.map("map", {
            center:  [ 16.8423241, 96.1970719 ],
            zoom: 19
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          });

        const LatLong = new L.LatLng(16.8423241, 96.1970719);
        const markerStyle : any =  `
        background-image: url(https://res.cloudinary.com/class6house/image/upload/v1622628467/DESstore/logo-edited_ac1vln.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        width: 7rem;
        height: 7rem;
        display: block;
        left: 1rem;
        top: -5rem;
        position: relative;
        border-radius: 7rem 7rem 0;
        // border: 1px solid #FFFFFF`;
    
        const icon = L.divIcon({
            className: "class6",
            html: `<span style="${markerStyle}" />`
        });

        L.marker(LatLong, {icon: icon}).addTo(this.map);


          tiles.addTo(this.map);
        
    }
    constructor(){

    }



    ngAfterViewInit(): void {
        this.initMap()
    }
    
}