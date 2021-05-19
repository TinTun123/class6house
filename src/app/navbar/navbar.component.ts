import { Component, HostListener } from "@angular/core";
import { DropService } from "./dropdown.service";

@Component({
    selector : "cm-nav-bar",
    templateUrl : "navbar.component.html",
    styleUrls: ["navbar.component.scss"]
})
export class NavBar {
    drop : boolean = false;
    public screenWidth : number;
    constructor(private dropService : DropService) {
        dropService.data.subscribe(para => {
            if (para && this.drop) {
                this.drop = !this.drop;
            }
        });

        this.screenWidth = window.innerWidth;
    }

    // @HostListener('window:resize', ['$event'])
    // getScreenSize(para ?: any) {
    //     this.screenWidth = window.innerWidth;      
    // }

    switch() {
        this.drop = !this.drop;
    }


}