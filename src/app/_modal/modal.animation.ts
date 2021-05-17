import { animate, state, style, transition, trigger } from "@angular/animations";


export const modalAniTrigger = trigger("modalAni", [
    state("disappear", style({
        opacity: 0
    })),
    state("appear", style({
        opacity: 1
    })),
    transition("* => appear", animate("300ms ease-in"))
])