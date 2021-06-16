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
        place: "",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1622709573/DESstore/drumDES01_pjqmyp.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1622709724/herledrum_e1eyws.jpg"
        }
    }, {
        name: "",
        type: "type02",
        place: "",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1622709573/DESstore/drumDES02_jjprsl.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1622709724/forddrum_rkhbiz.jpg"
        }
    },
    {
        name: "",
        type: "type03",
        place: "",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1622709573/DESstore/drumDES03_w2xeyw.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1622709724/jackdrum_eaftm5.jpg"
        }
    }
]

    public pallet = [
        {
        name: "",
        item: "Pallet Box",
        dimension: 'L 15" x W 10" x H 6" (in)',
        type: "type01",
        price: "8000 mmk (each)",
        color: "",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1623846335/pallet01_kw1yf9.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1623846335/pallet01_kw1yf9.jpg"
        }
    }, {
        name: "",
        item: "Pallet Box",
        dimension: 'L 15" x W 10" x H 6" (in)',
        color: "White",
        price: "8000 mmk",
        type: "type02",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1623846335/pallet04_kql892.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1623846335/pallet04_kql892.jpg"
        }
    },
    {
        name: "",
        item: "Pallet Box",
        dimension: 'L 15" x W 10" x H 6" (in)',
        color:"Blue",
        price: "8000 mmk",
        type: "type03",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1623846335/pallet02_oftd0e.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1623846335/pallet02_oftd0e.jpg"
        }
    },
    {
        item: "Pallet Box",
        name: "",
        dimension: 'L 15" x W 10" x H 6" (in)',
        color: "Original",
        price: "8000 mmk",
        type: "type03",
        src : {
            DES: "https://res.cloudinary.com/class6house/image/upload/v1623846334/pallet03_ty7byq.jpg",
            mobile : "https://res.cloudinary.com/class6house/image/upload/v1623846334/pallet03_ty7byq.jpg"
        }
    }
];

public industrialModal = [
    {
    name: "",
    item: "",
    dimension: '',
    type: "",
    price: "",
    color: "",
    src : {
        DES: "https://res.cloudinary.com/class6house/image/upload/v1623846335/industrialshaft_nwv8fu.jpg",
        mobile : "https://res.cloudinary.com/class6house/image/upload/v1623846335/industrialshaft_nwv8fu.jpg"
    }
}, {
    name: "",
    item: "",
    dimension: '',
    color: "",
    price: "",
    type: "",
    src : {
        DES: "https://res.cloudinary.com/class6house/image/upload/v1623846335/lightbub_lk0kf9.jpg",
        mobile : "https://res.cloudinary.com/class6house/image/upload/v1623846335/lightbub_lk0kf9.jpg"
    }
}
];


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