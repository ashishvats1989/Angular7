import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import {BrowserModule} from "@angular/platform-browser"
import { LoginModule } from "./login/login.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { HomeComponent, ListComponent, NotFoundComponent,GalleriaDemo,weddingComponent} from "./menulinks.components";
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { PanelModule } from "primeng/panel"
import { ProductsComponent } from "./shopping/products.component";
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';

let appRoutes = [
    {path:"", component: HomeComponent},
    {path:"list", component: ListComponent, children: [
        {path:"", component: ProductsComponent},
        {path:":ctgid", component: ProductsComponent}
    ]},
    {path:"pics", component: GalleriaDemo},
    {path:"wedding", component: weddingComponent},
    {path:"**", component: NotFoundComponent}    
]

@NgModule({
    // Register Component
    declarations: [AppComponent, HeaderComponent, HomeComponent, ListComponent,
    NotFoundComponent,GalleriaDemo,weddingComponent],
    // Startup Component
    bootstrap: [AppComponent],
    // Module Dependencies
    imports: [BrowserModule, LoginModule, ShoppingModule, 
        RouterModule.forRoot(appRoutes), FormsModule, BrowserAnimationsModule,
        PanelModule,GalleriaModule,ButtonModule]
})
export class AppModule {
    constructor(){
        console.log("App Module Constructor...")
    }
}