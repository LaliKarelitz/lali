import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { FatherComponent } from './father/father.component';
import { ChildComponent } from './child/child.component';
import { ListComponent } from './list/list.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AdditemComponent } from './additem/additem.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FatherComponent,
    ChildComponent,
    ListComponent,
    ShoesComponent,
    AdditemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
