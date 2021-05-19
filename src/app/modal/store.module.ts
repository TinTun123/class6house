import { NgModule } from "@angular/core";
import { StaticData } from "./staticData";
import { ProductRepository } from "./storeData.repository";

@NgModule({
    imports: [],
    providers: [ProductRepository, StaticData]
})
export class StoreModule {
    constructor() {}
}