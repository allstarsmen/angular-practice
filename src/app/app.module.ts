import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavigationComponent } from "./components/navigation/navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }