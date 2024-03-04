import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { DatosProfesoresComponent } from './datos-profesores/datos-profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    AlumnosComponent,
    InformacionComponent,
    DatosProfesoresComponent
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
