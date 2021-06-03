import { Component, HostListener } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { DropService } from "./dropdown.service";

@Component({
    selector : "cm-nav-bar",
    templateUrl : "navbar.component.html",
    styleUrls: ["navbar.component.scss"]
})
export class NavBar {
    drop : boolean = false;
    public screenWidth : number;
    public androidURL = "fb://page/100006072916085";
    public IphoneURL = "fb://profile/100006072916085";
    public fbURL = "https://m.facebook.com/class6house/?tsid=0.9179657149952555&source=result";
    constructor(private dropService : DropService, private sanitizier : DomSanitizer) {
        dropService.data.subscribe(para => {
            if (para && this.drop) {
                this.drop = !this.drop;
            }
        });

        this.screenWidth = window.innerWidth;

    }

    print(para : any) {
        console.log(para);
        
    }

    getURL() : SafeUrl{
        let userAgent = window.navigator.userAgent;
        if(/android/i.test(userAgent)) {
        
            return this.sanitizier.bypassSecurityTrustUrl(this.androidURL);
        } else if(/iPad|iPhone|iPod/.test(userAgent)) {
            
            return this.sanitizier.bypassSecurityTrustUrl(this.IphoneURL);
        } else {
            
            return this.fbURL;
        }
    }
    switch() {
        this.drop = !this.drop;
    }


}