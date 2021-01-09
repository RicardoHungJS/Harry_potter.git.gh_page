import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HogwartsHousesMembersComponent } from './component/hogwarts-houses-members/hogwarts-houses-members.component';
import { HogwartsStudentsComponent } from './component/hogwarts-students/hogwarts-students.component';
import { HogwartsTeachersComponent } from './component/hogwarts-teachers/hogwarts-teachers.component';
import { NuevosEstudiantesComponent } from './component/nuevos-estudiantes/nuevos-estudiantes.component';

const routes: Routes = [
  {path:'./', component: HogwartsHousesMembersComponent},
  {path:'estudiantes', component: HogwartsStudentsComponent},
  {path:'nuevos-estudiantes', component: NuevosEstudiantesComponent},
  {path:'profesores', component: HogwartsTeachersComponent},
  {path:'**', component: HogwartsHousesMembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
