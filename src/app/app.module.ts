import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { LandingComponent } from './landing/landing.component';

import { LookupComponent } from './lookup/lookup.component';
import { AddItemComponent } from './add-item/add-item.component';
import { LookupItemComponent } from './lookup/lookup-detail/lookup-item/lookup-item.component';
import { LookupStartComponent } from './lookup/lookup-start/lookup-start.component';
import { LookupEditComponent } from './lookup/lookup-edit/lookup-edit.component';
import { LookupDetailComponent } from './lookup/lookup-detail/lookup-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LookupComponent,
    AddItemComponent,
    LookupItemComponent,
    LookupStartComponent,
    LookupEditComponent,
    LookupDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
