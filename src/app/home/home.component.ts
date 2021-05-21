import { Component, ElementRef, HostListener, ViewChild, OnInit, ViewChildren, QueryList } from "@angular/core";

import { DropService } from "../navbar/dropdown.service";
import { ModalService } from "../_modal/modal.service";


@Component({
    selector: "home",
    templateUrl: "home.component.html",
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
    public slides : {src: string}[] = [
        {src: "../../assets/image/cover 4.jpg"}
        // {src: "../../assets/image/jpg"},
        // {src: "../../assets/image/jpg"}
      ];
    public screenWidth : number;
    @ViewChild('popup')popup : ElementRef;
    @ViewChildren('link')link : QueryList<ElementRef>;

    constructor(private dropService : DropService, 
        private modalService : ModalService) {
        this.getScreenSize(); 
    }
    ngOnInit(): void {
        this.modalService.swiftColor().subscribe(c => {
            if (c && this.popup) {

                console.log("off");
                
                
                this.popup.nativeElement.style.backgroundColor = 'white';

                this.link.forEach(each => {
                    let ele = each.nativeElement;
                    ele.style.color = "black";
                });
            }
            
        })
    }

    


    @HostListener('window:resize', ['$event'])
    getScreenSize(para ?: any) {
        this.screenWidth = window.innerWidth;      
    }
    roll() {
        this.dropService.updataDataSelection(true)
    }

    changePopupColor() {

    }
    

    openModal(id : string) {
        
        if (this.popup) {
            this.popup.nativeElement.style.backgroundColor = 'black';
        }
        

        this.link.forEach(each => {
            let ele = each.nativeElement;
            ele.style.color = "white";
        });
        
        
        
        this.modalService.open(id);
    }
}