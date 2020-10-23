import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //Permita crear formularios
import {HttpClientModule} from '@angular/common/http'; //Poder conectarse con el servidor

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTerrenoComponent } from './components/add-terreno/add-terreno.component';
import { TerrenoDetailsComponent } from './components/terreno-details/terreno-details.component';
import { TerrenoListComponent } from './components/terreno-list/terreno-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTerrenoComponent,
    TerrenoDetailsComponent,
    TerrenoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
