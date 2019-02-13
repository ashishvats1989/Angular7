import { Component, Input, EventEmitter, Output, OnDestroy, OnInit, OnChanges } from "@angular/core";

@Component({
    selector: "my-sign",
    template: `<h3>{{title}}</h3>
    <form>
     UserName: <input type="text" placeholder="Enter User Name" #frmUser><br>
     Password: <input type="password" placeholder="Enter Password" #frmPwd><br>
     <button type="button" class="btn btn-primary" 
        (click)="handleButtonClick(frmUser.value, frmPwd.value)">{{title}}</button>
    </form> 
    `
})
export class MySignComponent implements OnDestroy, OnInit, OnChanges {
    @Input()
    title:string;

    @Output()
    myEvent = new EventEmitter()

    handleButtonClick(usr, pwd){
        console.log("User Name: ", usr, " Password: ", pwd)
        this.myEvent.emit({usr, pwd})
    }

    constructor(){
        console.log("My SIGN Constructor...", this.title)
    }
    ngOnDestroy(){
        console.log("My SIGN Destroyed...")
    }
    ngOnInit(){
        console.log("My SIGN On INIT ", this.title)
    }
    ngOnChanges(){
        console.log("My SIGN On Changes ")
    }
}