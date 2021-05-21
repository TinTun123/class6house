import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { modalAniTrigger } from "./modal.animation";
import { ModalService } from "./modal.service";
import { hoverAniTrigger } from "./hover.animation";


@Component({
    selector: "to-modal",
    templateUrl: "modal.component.html",
    styleUrls: ["modal.component.scss"],
    animations: [modalAniTrigger]
})
export class ToModal implements OnInit, OnDestroy, AfterViewInit {

    @Input() id : string;
    @Input() opacity : string;
    private element : any;
    public aniTrigger: string = '';


    constructor(el : ElementRef, private modalService : ModalService) {
        this.element = el.nativeElement;
    }
    ngAfterViewInit() {
    }



    ngOnInit() {

        if(!this.id) {
            return
        }     

        document.body.appendChild(this.element);
        console.log(this.element);
        


        if (this.id == "modal-1" || this.id == "modal-2") {
            this.element.addEventListener("mouseover", (e : any) => {
            
                if (e.target.classList.contains("cu-modal-background")) {
                    this.modalService.borderOver();
                    this.close();
                }
            })
        } else {
            this.element.addEventListener("click", (e : any) => {
            
                if (e.target.classList.contains("cu-modal-background")) {
                    this.modalService.borderOver();
                    this.close();
                }
            })
        }
        
        


        this.element.children[0].style.backgroundColor = this.opacity;

        this.modalService.add(this);
        
    }

    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(){
        this.element.style.display = "block";
        this.element.style.visibility = "visible";
        this.element.style.opacity = 1;
        this.aniTrigger = "appear"
        document.children[0].classList.add("modal-open");
    }

    close() {
        this.element.style.display = "none";
        document.children[0].classList.remove("modal-open");
        this.aniTrigger = "disappear";
    }

    getAniTrigger() {
        return this.aniTrigger;
    }
}