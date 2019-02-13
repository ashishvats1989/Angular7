import { Component } from "@angular/core";
import { CategoryService } from "./shared/category.service";
import { Category } from "./app.models";
import { ActivatedRoute } from "@angular/router";
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';

@Component({
    templateUrl: "./menulinks.component.html"
})
export class HomeComponent {
    title = "Home Title"
    count:number = 0;
    incrementCount() : void {
        this.count++
    }
    changeTitle(){
        this.title = "UHG"
    }
}

@Component({
templateUrl: "./list.component.html"
})
export class ListComponent {
    ctgLinks:Category[]=[]
    constructor(private cs:CategoryService){}
    ngOnInit(){
        this.cs.getCategories().subscribe(data => this.ctgLinks=data, err => console.log("Error ", err))
    }
}

@Component({
    template:`<h1>404. Not Found....</h1>`
})
export class NotFoundComponent {}

@Component({
templateUrl: "./pics.component.html"
})
export class GalleriaDemo {
    
    images: any[];
    
    ngOnInit() {
        
        this.images = [];
         this.images.push({source:'https://static.ashleyjeremy.com/onground.jpg', alt:'Description for Image 1', title:'Title 1'});
         console.log(this.images);
         this.images.push({source:'assets/images/IMG_0964.jpg', alt:'Description for Image 2', title:'Title 2'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria4.jpg', alt:'Description for Image 4', title:'Title 4'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria5.jpg', alt:'Description for Image 5', title:'Title 5'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria6.jpg', alt:'Description for Image 6', title:'Title 6'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria7.jpg', alt:'Description for Image 7', title:'Title 7'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria8.jpg', alt:'Description for Image 8', title:'Title 8'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria9.jpg', alt:'Description for Image 9', title:'Title 9'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria10.jpg', alt:'Description for Image 10', title:'Title 10'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria11.jpg', alt:'Description for Image 11', title:'Title 11'});
        // this.images.push({source:'assets/showcase/images/demo/galleria/galleria12.jpg', alt:'Description for Image 12', title:'Title 12'});
    }
}

@Component({
templateUrl: "./wedding.component.html"
})
export class weddingComponent {
        handleClickFusion() {
        console.log("hello");
        //execute action
    }

            handleClickVilla() {
        console.log("hello");
        //execute action
    }
    ngOnInit() {

    }
}