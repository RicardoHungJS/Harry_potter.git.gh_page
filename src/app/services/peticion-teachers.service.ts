import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionTeachersService {

  public url : string;

  constructor(public _http: HttpClient) { 
    this.url = 'http://hp-api.herokuapp.com/api/characters/staff';
  }

  getInfoTeachers(): Observable<any> {
    return this._http.get(this.url);
  }

}
