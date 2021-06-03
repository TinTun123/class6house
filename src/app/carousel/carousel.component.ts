import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeIn, fadeOut, scaleIn, scaleOut } from './carousel.animation';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(scaleIn, {params: {time: '300ms'}})]),
      transition('* => void', [useAnimation(scaleOut, {params: {time: '300ms'}})])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input()modals : any[];
  currentModal : number = 0;
  constructor() { }

  onPreviousClick () {
    const previus = this.currentModal - 1;
    this.currentModal = previus < 0 ? this.modals.length - 1 : previus;
    console.log(this.currentModal);
    
    
  }

  onNextClick () {
    const next = this.currentModal + 1;
    this.currentModal = next === this.modals.length ? 0 : next;

    
  }

  ngOnInit(): void {
    
  }

}
