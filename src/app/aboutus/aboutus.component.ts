import { AfterViewInit, Component } from "@angular/core";


@Component({
    selector: "about-us",
    templateUrl: "aboutus.component.html",
    styleUrls: ["aboutus.component.scss"]
})
export class AboutUsComponent implements AfterViewInit {
    constructor() {}
    ngAfterViewInit(): void {
        window.scroll(0, 0);
    }


}