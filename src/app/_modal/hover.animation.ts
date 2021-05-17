import { animate, state, style, transition, trigger } from "@angular/animations";


export const hoverAniTrigger = trigger("hoverAni", [
    state("hover", style({
        backgroundColor: "rgba(0, 0, 0, 0.507)"
    })),
    state("*", style({
        backgroundColor: "rgba(0, 0, 0, 0)"
    })),
    transition("* => hover", animate("300ms ease-in")),
    transition("hover => *", animate("200ms ease-out")),
])