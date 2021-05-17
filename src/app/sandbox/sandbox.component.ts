import { Component } from "@angular/core";
import { hoverAniTrigger } from "../_modal/hover.animation";


@Component({
    selector: "sandbox",
    templateUrl: "sandbox.component.html",
    styleUrls: ["sandbox.component.scss"],
    animations: [hoverAniTrigger]
})
export class SandBoxComponent {
    private hoverVal : string;
    constructor() {}

    hover() {
        this.hoverVal = "hover"
    }

    getHoverVal() {
        console.log(this.hoverVal);
        
        return this.hoverVal;
    }


}