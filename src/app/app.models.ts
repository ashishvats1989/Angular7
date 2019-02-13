export class Product {
    constructor(public id:number, public name:string, public price:number,
        public description:string, public ctgid:number) {}
}

export class Category {
    constructor(public id:number, public name:string) {}
}

export class CartItem {
    constructor(public id:number, public name:string, public price:number,
        public qty:number) {}
}