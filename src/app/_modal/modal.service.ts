import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";


@Injectable()
export class ModalService {

    private modals : any[] = [];
    public closeNoti = new Subject<boolean>();

    borderOver() {
        this.closeNoti.next(true);
    }

    swiftColor() {
        return this.closeNoti.asObservable();
    }

    add(modal : any) {
        this.modals.push(modal);     
    }

    remove(id : string) {
       this.modals = this.modals.filter(m => {
            return m.id !== id
        });
    }

    open(id : string) {
        const modal = this.modals.find(m => {
            return m.id === id;
        });
        
        modal.open();
    }

    close(id : string) {
        const modal = this.modals.find(m => {
            return m.id === id;
        });
        modal.close();
    }

    showList() {
        console.log(this.modals);
        
    }

}