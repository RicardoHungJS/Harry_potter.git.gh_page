import { Component, OnInit } from '@angular/core';
import { PeticionTeachersService } from '../../services/peticion-teachers.service'


@Component({
  selector: 'app-hogwarts-teachers',
  templateUrl: './hogwarts-teachers.component.html',
  styleUrls: ['./hogwarts-teachers.component.css'],
  providers: [PeticionTeachersService]
})
export class HogwartsTeachersComponent implements OnInit {

  public teachers: Array<any>;

  constructor(public _peticionTeachers: PeticionTeachersService) { 
    this.teachers = [];
  }

  ngOnInit(): void {
    this.cargaDeTeachers();
    
  }
  
  filterTeachers = '';

  cargaDeTeachers() {
    this._peticionTeachers.getInfoTeachers().subscribe(
      (resultado) => { this.teachers = resultado},
      (error) => { console.log(<any>error); } 
    );
  }

}
