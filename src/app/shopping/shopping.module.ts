import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({  declarations: [ProductsComponent, CartitemsComponent],
    exports: [ProductsComponent, CartitemsComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class ShoppingModule {
    constructor(){
        console.log("Shopping Module Constructor")
    }
}