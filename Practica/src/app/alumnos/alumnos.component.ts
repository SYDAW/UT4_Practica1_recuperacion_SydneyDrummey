import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit{
  public resultadoPeticion:any;
  public inputIdPost: string='';
  public inputUsuarioPost: string='';
  public inputEmailPost: string='';
  public inputEdadPost: string='';
  public url: string = "http://localhost:3000/alumnos";

  constructor (private http:HttpClient, private ruta: Router){
    console.log("Entro en constructor de Quienes somos");
  }

  ngOnInit(){
    this.get();
  }

  get(){
    this.http.get(this.url)
    .subscribe(data => {this.resultadoPeticion = data;});
  }

  post(){
    this.http.post(this.url,
      {
        id: this.inputIdPost,
        usuario: this.inputUsuarioPost,
        email: this.inputEmailPost,
        edad: this.inputEdadPost
      }).subscribe(data => {this.resultadoPeticion = data;})
      alert("Añadido con exito, recarga la pagina despúes");
  }
  
}
