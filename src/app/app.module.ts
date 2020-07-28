import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateUserComponent } from './create-user/create-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { EmploymentFieldComponent } from './employment-field/employment-field.component';
import { ExperienceFieldComponent } from './experience-field/experience-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    SearchbarComponent, 
    CreateUserComponent,
    DisplayUserComponent,
    EmploymentFieldComponent,
    ExperienceFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
