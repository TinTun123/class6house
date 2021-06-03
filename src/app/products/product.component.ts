import { ViewChildren } from "@angular/core";
import { QueryList } from "@angular/core";
import { ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { ModalService } from "../_modal/modal.service";


@Component({
    selector: "product",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.scss"]
})
export class ProductComponent {

    @ViewChild('popup')popup : ElementRef;
    @ViewChildren('link')link : QueryList<ElementRef>;

    public imgModal = [
        {
        name: "name01",
        type: "type01",
        place: "place01",
        src : {
            DES: "assets/drumDES01.jpg",
            mobile : "assets/herledrum.jpg"
        }
    }, {
        name: "name02",
        type: "type02",
        place: "place02",
        src : {
            DES: "assets/drumDES02.jpg",
            mobile : "assets/forddrum.jpg"
        }
    },
    {
        name: "name03",
        type: "type03",
        place: "place03",
        src : {
            DES: "assets/drumDES03.jpg",
            mobile : "assets/jackdrum.jpg"
        }
    }
]

    constructor(private modalService: ModalService) {}
    

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