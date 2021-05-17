import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class DropService {
    drop : boolean = false;

    private datasource = new BehaviorSubject(this.drop);
    data = this.datasource.asObservable();

    constructor() {}

    updataDataSelection(para : boolean) {
        this.datasource.next(para);
    }
}