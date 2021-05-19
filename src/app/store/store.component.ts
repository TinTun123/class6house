import { Component, ElementRef } from "@angular/core";
import { Product } from "../modal/store.modal";
import { ProductRepository } from "../modal/storeData.repository";
import { DropService } from "../navbar/dropdown.service";


@Component({
    selector: "store",
    templateUrl : "store.component.html",
    styleUrls: ["store.component.scss"]
})
export class StoreComponent {
    public products : Product[];
    public category: string = "";
    constructor(private dropService: DropService, private dataService : ProductRepository) {
        this.products = dataService.getProducts();
    }

    getProducts() : Product[]{
        let products = this.products.filter( p => {
            return p.categoru == this.category;
        })

        console.log(this.category);
        
        
        if (this.category == "") {
            return this.products
        } else {
            return products;
        }
    }

    roll() {
        this.dropService.updataDataSelection(true);
    }

    getCate(para : any) {
        this.category = para.value;
        console.log(this.category);
    }
}