import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceHolder } from '../interfaces/place-holder';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css'
})
export class ProfesoresComponent {
  public resultadoPeticion:any;
  public inputIdGet: string='';
  public url: string = "http://localhost:3000/profesores";

  constructor (private http:HttpClient, private ruta: Router){
    console.log("Entro en constructor de Profesores");
  }

  get(){
    if(this.inputIdGet !== ''){
      this.http.get<PlaceHolder>(this.url+"/"+this.inputIdGet)
      .subscribe({
       next: (respuesta: PlaceHolder) => {
         this.resultadoPeticion = respuesta;
       },
       error: (err) => {console.log("Error");}
     });
    }
    else{
      this.http.get(this.url)
      .subscribe(data => {this.resultadoPeticion = data;});
    }
  }
}
