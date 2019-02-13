import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"searchData"})
export class SearchDataPipe implements PipeTransform {
    transform(input:any[], searchVar:string, col:string){
        if(searchVar != undefined && col != undefined && searchVar != "") {
            return input.filter((e) => e[col].indexOf(searchVar) > -1)
        } else {
            return input;
        }
    }
}