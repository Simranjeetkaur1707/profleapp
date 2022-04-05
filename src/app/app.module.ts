import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldControl, }from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { DisplaycomponentComponent } from './displaycomponent/displaycomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DisplaycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,  
    HttpClientModule
   // MatFormFieldControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
