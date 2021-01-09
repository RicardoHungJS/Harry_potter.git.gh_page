import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HogwartsHousesMembersComponent } from './component/hogwarts-houses-members/hogwarts-houses-members.component';
import { HogwartsStudentsComponent } from './component/hogwarts-students/hogwarts-students.component';
import { HogwartsTeachersComponent } from './component/hogwarts-teachers/hogwarts-teachers.component';
import { NuevosEstudiantesComponent } from './component/nuevos-estudiantes/nuevos-estudiantes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HogwartsHousesMembersComponent,
    HogwartsStudentsComponent,
    HogwartsTeachersComponent,
    NuevosEstudiantesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
