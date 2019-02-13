import { Component } from "@angular/core";

@Component({
    selector: "sign-up",
    template: `<my-sign [title]="signUpHeading"></my-sign>`
})
export class SignUpComponent {
    signUpHeading = "Quick Sign Up"
}