import { Component, OnInit } from '@angular/core';
import { PeticionEstudiantesService } from 'src/app/services/peticion-estudiantes.service';

@Component({
  selector: 'app-hogwarts-students',
  templateUrl: './hogwarts-students.component.html',
  styleUrls: ['./hogwarts-students.component.css'],
  providers:[PeticionEstudiantesService]
})
export class HogwartsStudentsComponent implements OnInit {

  public estudents: Array<any>;

  constructor(public _peticionEstudiantes: PeticionEstudiantesService) { 
    this.estudents = [];
  }
  
  ngOnInit(): void {
    this.cargaDeEstudiantes();
    
  }
  
  filterEstudent = '';

  cargaDeEstudiantes() {
    this._peticionEstudiantes.getInfoEstudents().subscribe(
      (resultado) => { this.estudents = resultado},
      (error) => { console.log(<any>error); } 
    );
  }

}
