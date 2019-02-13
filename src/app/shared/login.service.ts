import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    private userData:string = "Guest"
    getUserData(){
        return this.userData
    }
    setUserData(newval:string){
        this.userData = newval;
    }
}