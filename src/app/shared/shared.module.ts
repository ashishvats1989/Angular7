import { NgModule } from "@angular/core";
import { MySignComponent } from "./mysign.component";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http"
import { ProductService } from "./product.service";
import { CategoryService } from "./category.service";
import { CartService } from "./cart.service";
import { SearchDataPipe } from "./filterdata.pipe";

@NgModule({
    declarations: [MySignComponent, SearchDataPipe],
    exports: [MySignComponent, SearchDataPipe],
    providers: [LoginService, ProductService, CategoryService, CartService],
    imports: [HttpClientModule]
})
export class SharedModule {}