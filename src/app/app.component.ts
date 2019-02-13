import {Component} from "@angular/core"

@Component({
    // Specify tag name for the component
    selector: "app-root",
    // Output for the component
    template: ` 
    <app-header></app-header>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    constructor(){
        console.log("App Component Constructor...")
    }
}