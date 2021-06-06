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
        name: "",
        type: "type01",
        place: "place01",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1622709573/DESstore/drumDES01_pjqmyp.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1622709724/herledrum_e1eyws.jpg"
        }
    }, {
        name: "",
        type: "type02",
        place: "place02",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1622709573/DESstore/drumDES02_jjprsl.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1622709724/forddrum_rkhbiz.jpg"
        }
    },
    {
        name: "",
        type: "type03",
        place: "place03",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1622709573/DESstore/drumDES03_w2xeyw.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1622709724/jackdrum_eaftm5.jpg"
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