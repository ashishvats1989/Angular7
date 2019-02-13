import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

console.log("This is MAIN TS File Message")

platformBrowserDynamic().bootstrapModule(AppModule);