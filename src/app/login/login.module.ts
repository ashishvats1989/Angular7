import { NgModule } from "@angular/core";
import { SignUpComponent } from "./signup.component";
import { SignInComponent } from "./signin.component";
import { RouterModule } from "@angular/router"
import { SharedModule } from "../shared/shared.module";

let loginRoutes = [
    {path:"signin", component: SignInComponent},
    {path:"signup", component: SignUpComponent}
]

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoginModule {
    constructor(){
        console.log("Login Module Constructor")
    }
}