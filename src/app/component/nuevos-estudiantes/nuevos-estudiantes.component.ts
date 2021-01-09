import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
// import { NewEstudent } from '../../models/newEstudent'

@Component({
  selector: 'app-nuevos-estudiantes',
  templateUrl: './nuevos-estudiantes.component.html',
  styleUrls: ['./nuevos-estudiantes.component.css']
})
export class NuevosEstudiantesComponent implements OnInit {

  public nombre: string;
  public apellidos: string;
  public email: string;
  public celular: number;
  public documento: number;

  public arrayNewEstudents: any;

  constructor() {
    
    this.nombre = '';
    this.apellidos = '';
    this.email = '';
    this.celular = 0;
    this.documento = 0;
    this.arrayNewEstudents = [];
    
  }
  
  ngOnInit(): void {

  }
  
  formularioNewEstudent = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    apellidos : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    celular : new FormControl('', [Validators.required, Validators.minLength(10)]),
    documento : new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  guardar(){

    const arrayNuevo: [] = this.formularioNewEstudent.value;

    this.arrayNewEstudents.push(arrayNuevo)
    
  }

}