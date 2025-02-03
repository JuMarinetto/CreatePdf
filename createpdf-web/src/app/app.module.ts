import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import { CreatePdfModule } from './create-pdf/create-pdf.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatePdfComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CreatePdfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
