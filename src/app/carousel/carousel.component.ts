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

  @Input()slides : {src: string}[];
  currentSlide : number = 0;
  constructor() { }

  onPreviousClick () {
    const previus = this.currentSlide - 1;
    this.currentSlide = previus < 0 ? this.slides.length - 1 : previus;
    console.log("previous Clicked: now current slide is ", this.currentSlide);
    
  }

  onNextClick () {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next Clicked: now current slide is ", this.currentSlide);
    
  }

  ngOnInit(): void {
  }

  preLoadImages() {
    for (const slide of this.slides){
      new Image().src = slide.src;
    }
  }

}
