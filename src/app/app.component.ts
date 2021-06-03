import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalService } from './_modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router : Router, private modalService: ModalService) {
    this.getScreenSize(); 
  }

  public screenWidth : number;
  @ViewChild('popup')popup : ElementRef;
  @ViewChildren('link')link : QueryList<ElementRef>;

  onActivate(para : any) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
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
  title = 'class6-house';

  ngOnInit() : void{

    this.modalService.swiftColor().subscribe(c => {
      if (c && this.popup) {
          
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

}
