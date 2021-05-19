import { Injectable } from "@angular/core";
import { StaticData } from "./staticData";
import { Product } from "./store.modal";

@Injectable()
export class ProductRepository {
    private products : Product[];
    constructor(private dataSource : StaticData) {
        this.products = dataSource.getData();
    }

    getProducts() {
        return this.products;
    }

    getProduct(id : number) : Product{
        let result = this.products.find( p => {
            p.id == id
        });

        if (result) {
            return result;
        } else {
            throw new Error("Product id undefined");
        }
    }
}