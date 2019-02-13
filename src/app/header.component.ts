import { Component } from "@angular/core";
import { LoginService } from "./shared/login.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    appHeading = "My Shopping App"
    userName = "Visitor"
    constructor(private lsvc:LoginService){
        console.log("Header Component Constructor...")
    }
    showUserName():string {
       // return this.userName
       return this.lsvc.getUserData();
    }
}