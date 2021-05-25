import { Component, ElementRef, HostListener, ViewChild, OnInit, ViewChildren, QueryList, AfterViewInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/base";
import { DropService } from "../navbar/dropdown.service";
import { ModalService } from "../_modal/modal.service";


@Component({
    selector: "home",
    templateUrl: "home.component.html",
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


    public product02Img : CloudinaryImage;
    public routeImg : CloudinaryImage;
    public routeDES : CloudinaryImage;
    public route : CloudinaryImage;
    public licenceDES : CloudinaryImage;
    public licence : CloudinaryImage;
    public capsDES : CloudinaryImage;
    public caps: CloudinaryImage;
    public garageDES: CloudinaryImage;
    public garage: CloudinaryImage;
    public drumDES: CloudinaryImage;
    public drum: CloudinaryImage;
    public recordingDES : CloudinaryImage;
    public recording: CloudinaryImage;
    public chairDES :CloudinaryImage;
    public chair: CloudinaryImage;
    public radioDES: CloudinaryImage;
    public radio: CloudinaryImage;
    public industrialDES : CloudinaryImage;
    public industrial: CloudinaryImage;

    public slides : {src: string}[] = [
        {src: "https://res.cloudinary.com/class6house/image/upload/v1621930172/DESstore/cover_4_lql3of.jpg"}
      ];
    public screenWidth : number;
    @ViewChild('popup')popup : ElementRef;
    @ViewChildren('link')link : QueryList<ElementRef>;

    constructor(private dropService : DropService, 
        private modalService : ModalService) {
        this.getScreenSize(); 
    }
    ngAfterViewInit(): void {

        
    }

    ngOnInit(): void {
        this.modalService.swiftColor().subscribe(c => {
            if (c && this.popup) {
                
                this.popup.nativeElement.style.backgroundColor = 'white';

                this.link.forEach(each => {
                    let ele = each.nativeElement;
                    ele.style.color = "black";
                });
            }
            
        })

        const cld = new Cloudinary({
            cloud: {
                cloudName: "class6house"
            }
        })

        this.product02Img = cld.image("product02_x0pplc");
        this.routeImg = cld.image("route66_02_ybia06");
        this.route = cld.image("route_fe9upp");
        this.routeDES = cld.image("route_ibrgyk");


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