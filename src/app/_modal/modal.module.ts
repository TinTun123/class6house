import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToModal } from "./modal.component";
import { ModalService } from "./modal.service";



@NgModule({
    declarations: [ToModal],
    providers: [ModalService],
    imports: [CommonModule],
    exports: [ToModal]
})
export class ModalModule {

} 