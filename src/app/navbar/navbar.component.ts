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
    public URL : string = "";
    public androidURL = "fb://page/100006072916085";
    public IphoneURL = "fb://profile/100006072916085";
    public fbURL = "https://m.facebook.com/class6house/?tsid=0.9179657149952555&source=result";
    constructor(private dropService : DropService) {
        dropService.data.subscribe(para => {
            if (para && this.drop) {
                this.drop = !this.drop;
            }
        });

        this.screenWidth = window.innerWidth;
        this.URL = this.getURL();
    }

    getURL() :string{
        let userAgent = window.navigator.userAgent;
        if(/android/i.test(userAgent)) {
            console.log("android");
            
            return this.androidURL;
        } else if(/iPad|iPhone|iPod/.test(userAgent)) {
            console.log();
            
            return this.IphoneURL;
        } else {
            console.log("browserURL");
            
            return this.fbURL;
        }
    }

    // @HostListener('window:resize', ['$event'])
    // getScreenSize(para ?: any) {
    //     this.screenWidth = window.innerWidth;      
    // }

    switch() {
        this.drop = !this.drop;
    }


}