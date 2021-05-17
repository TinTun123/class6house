import { Component } from "@angular/core";
import { DropService } from "./dropdown.service";

@Component({
    selector : "cm-nav-bar",
    templateUrl : "navbar.component.html",
    styleUrls: ["navbar.component.scss"]
})
export class NavBar {
    drop : boolean = false;
    constructor(private dropService : DropService) {
        dropService.data.subscribe(para => {
            if (para && this.drop) {
                this.drop = !this.drop;
            }
        });
    }

    switch() {
        this.drop = !this.drop;
    }


}