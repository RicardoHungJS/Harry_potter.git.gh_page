import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionHousesMembersService {

  public url: string;

  constructor(public _http: HttpClient) {

    this.url = 'http://hp-api.herokuapp.com/api/characters/house';

  }

  getInfoWizardSly(houses: string): Observable<any> {
    // console.log(houses);
    return this._http.get(`${this.url}/${houses}`);
  }
  
  getInfoWizardGry(houses: string): Observable<any> {
    // console.log(houses);
    return this._http.get(`${this.url}/${houses}`);
  }

  getInfoWizardHuf(houses: string): Observable<any> {
    // console.log(houses);
    return this._http.get(`${this.url}/${houses}`);
  }

  getInfoWizardRav(houses: string): Observable<any> {
    // console.log(houses);
    return this._http.get(`${this.url}/${houses}`);
  }
}
