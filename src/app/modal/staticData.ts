import { Injectable } from "@angular/core";
import { Product } from "./store.modal";

@Injectable()
export class StaticData {
    private data : Product[];
    constructor() {
        this.data = new Array<Product>(
            new Product(1, "route-66", "signs", 500, ["tin sign", "route 66", "historic"]),
            new Product(2, "route-66", "signs", 500, ["tin sign", "route 66", "historic"]),
            new Product(3, "route-66", "signs", 500, ["tin sign", "route 66", "historic"]),
            new Product(4, "route-66", "signs", 500, ["tin sign", "route 66", "historic"]),
            new Product(5, "Licence plate", "licence", 600, ["licence plate", "bike", "automobile", "vehicel"]),
            new Product(6, "Licence plate", "licence", 600, ["licence plate", "bike", "automobile", "vehicel"]),
            new Product(7, "Licence plate", "licence", 600, ["licence plate", "bike", "automobile", "vehicel"]),
            new Product(8, "Licence plate", "licence", 600, ["licence plate", "bike", "automobile", "vehicel"]),
            new Product(9, "Licence plate", "licence", 600, ["licence plate", "bike", "automobile", "vehicel"]),
            new Product(10, "Bottle caps", "caps", 300, ["beverage", "drink", "bottle cap"]),
            new Product(11, "Bottle caps", "caps", 300, ["beverage", "drink", "bottle cap"]),
            new Product(12, "Bottle caps", "caps", 300, ["beverage", "drink", "bottle cap"])
        )
    }

    getData() {
        return this.data;
    }


}