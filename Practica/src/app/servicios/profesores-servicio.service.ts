import { Injectable } from '@angular/core';
import { Profesores } from '../clases/profesores.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresServicioService {
  public profesores: Profesores;

  constructor() { 
    this.profesores = new Profesores();
  }
}
