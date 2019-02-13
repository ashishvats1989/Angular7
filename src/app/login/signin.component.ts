import { Component } from "@angular/core";
import { LoginService } from "../shared/login.service";

@Component({
    selector: "sign-in",
    template: `<h4>Welcome {{signInUser}}</h4>
    <my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>`
})
export class SignInComponent {
    signInUser = "Guest"
    signInHeading = "Sign In"
    handleMyEvent(obj){
        this.ls.setUserData(obj.usr);
        this.signInUser = obj.usr;
    }
    constructor(private ls:LoginService){}
}