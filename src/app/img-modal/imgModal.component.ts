import { Component, Input, OnInit } from "@angular/core";
import { modalData } from "../home/imgModal.data";


@Component({
    selector: "img-modal",
    templateUrl: "imgModal.component.html",
    styleUrls: ["imgModal.component.scss"]
})
export class ImgModal implements OnInit{
    @Input()imgModalAttr : any;
    constructor() {}
    ngOnInit() {
    }

    print(para : any) {
        console.log(para);
        
    }
}