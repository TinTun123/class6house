import { Component, ElementRef, HostListener, ViewChild, OnInit, ViewChildren, QueryList, AfterViewInit } from "@angular/core";
import { DropService } from "../navbar/dropdown.service";
import { ModalService } from "../_modal/modal.service";
import { modalData } from "./imgModal.data";
import { imgModal } from "./imgModal.modal";


@Component({
    selector: "home",
    templateUrl: "home.component.html",
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    public screenWidth : number;
    public modalDatas : imgModal[];
    public imgModal = [
        {
        name: "The Galleria 9",
        type: "",
        place: "N0.9, Kabar Aye Pagoda Road, Golden Valley Ward 2, Bahan Tsp, Yangon",
        src : {
            DES : "https://res.cloudinary.com/class6house/image/upload/v1622705802/DESstore/shop01DES_khi3oj.jpg",
            mobile: "https://res.cloudinary.com/class6house/image/upload/v1622705676/g9-croped_jlsei1.jpg"
        }
    }, {
        name: "TM Milk & Bakery (Bago Branch)",
        type: "type02",
        place: "Bago",
        src : {
            DES : "https://res.cloudinary.com/class6house/image/upload/v1622705808/DESstore/shop02DES_px49by.jpg",
            mobile: "https://res.cloudinary.com/class6house/image/upload/v1622705667/tn-croped_lg4lb4.jpg"
        }
    },
    {
        name: "Route 63 Bar & Bistro",
        type: "type03",
        place: "N0.63, Koeminkochin Road, Shwe Gone Daing Bahan,Yangon",
        src : {
            DES : "https://res.cloudinary.com/class6house/image/upload/v1622705813/DESstore/shop03DES_h5vrfj.jpg",
            mobile: "https://res.cloudinary.com/class6house/image/upload/v1622705648/r63-croped_jwncqd.jpg"
        }
    }
]
    @ViewChild('popup')popup : ElementRef;
    @ViewChildren('link')link : QueryList<ElementRef>;

    constructor(private dropService : DropService, 
        private modalService : ModalService,
        private modalData : modalData) {
            this.modalDatas = this.modalData.getData();
    }
    ngAfterViewInit(): void {

        
    }

    ngOnInit(): void {

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