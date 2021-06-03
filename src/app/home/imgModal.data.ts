import { Injectable } from "@angular/core";
import { imgModal } from "./imgModal.modal";



@Injectable()
export class modalData {
    private datas : imgModal[] = [];
    constructor() {
        this.datas = new Array<imgModal>(
            new imgModal("name01", "type01", "place01", ["src01"]),
            new imgModal("name02", "type02", "place02", ["src02"]),
            new imgModal("name03", "type03", "place03", ["src03"]),
        );
    }

    getData() {
        return this.datas;
    }
}