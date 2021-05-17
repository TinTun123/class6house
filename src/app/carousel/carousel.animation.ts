import { animate, animation, style } from "@angular/animations";

// Fade in out anima

export const fadeIn = animation([
    style({opacity: 0}),
    animate('{{time}}', style({opacity: 1}))
]);

export const fadeOut = animation([
    style({opacity: 1}),
    animate('{{time}}', style({opacity: 0}))
]);


// scale ani

export const scaleIn = animation([
    style({opacity: 0, transform: "sacle(0.5)"}),
    animate('{{time}}  cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({opacity: 1, transform: "scale(1)"}))
]);

export const scaleOut = animation([
    style({opacity: 1, transform: "scale(1)"}),
    animate('{{time}}  cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({opacity: 0, transform: "scale(0.5)"}))
]);
