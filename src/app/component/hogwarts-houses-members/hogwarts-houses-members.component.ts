import { Component, OnInit } from '@angular/core';
import { PeticionHousesMembersService } from '../../services/peticion-houses-members.service'

@Component({
  selector: 'app-hogwarts-houses-members',
  templateUrl: './hogwarts-houses-members.component.html',
  styleUrls: ['./hogwarts-houses-members.component.css'],
  providers: [PeticionHousesMembersService]
})

export class HogwartsHousesMembersComponent implements OnInit {

  public wizardsSly: Array<any>;
  public wizardsGry: Array<any>;
  public wizardsHuf: Array<any>;
  public wizardsRav: Array<any>;
  public houseGry: string;
  public houseSly: string;
  public houseHuf: string;
  public houseRav: string;
  public casaName: Array<any>;
  public casaColor: string;
  public casaHeaderColor: string;

  constructor(public _peticionHousesService: PeticionHousesMembersService) {

    this.houseGry = 'gryffindor';
    this.houseSly = 'slytherin';
    this.houseHuf = 'hufflepuff';
    this.houseRav = 'ravenclaw';
    this.wizardsSly = [];
    this.wizardsGry = [];
    this.wizardsHuf = [];
    this.wizardsRav = [];
    this.casaName = [];
    this.casaColor = '';
    this.casaHeaderColor = '';

  }

  filterWizard = '';

  ngOnInit(): void {

    this.cargaDeMagosGryffindor(this.houseGry);
    this.cargaDeMagosSlytherin(this.houseSly);
    this.cargaDeMagosHufflepuff(this.houseHuf);
    this.cargaDeMagosRavenclaw(this.houseRav);
  }

  cargaDeMagosGryffindor(houseGry: string) {
    this._peticionHousesService.getInfoWizardGry(houseGry).subscribe(
      (resultado) => { this.wizardsGry = resultado; },
      (error) => { console.log(<any>error); },
    );
  }

  cargaDeMagosSlytherin(houseSly: string) {
    this._peticionHousesService.getInfoWizardSly(houseSly).subscribe(
      (resultado) => { this.wizardsSly = resultado; },
      (error) => { console.log(<any>error); },
    );
  }

  cargaDeMagosHufflepuff(houseHuf: string) {
    this._peticionHousesService.getInfoWizardGry(houseHuf).subscribe(
      (resultado) => { this.wizardsHuf = resultado; },
      (error) => { console.log(<any>error); },
    );
  }
  cargaDeMagosRavenclaw(houseRav: string) {
    this._peticionHousesService.getInfoWizardGry(houseRav).subscribe(
      (resultado) => { this.wizardsRav = resultado; },
      (error) => { console.log(<any>error); },
    );
  }

  casaGry() {
    this.casaName = this.wizardsGry;
    this.casaColor = 'colorGry';
    this.casaHeaderColor = 'colorGryHeader';
  }
  casaSly() {
    this.casaName = this.wizardsSly;
    this.casaColor = 'colorSly';
    this.casaHeaderColor = 'colorSlyHeader';
  }
  casaHuf() {
    this.casaName = this.wizardsHuf;
    this.casaColor = 'colorHuf';
    this.casaHeaderColor = 'colorHufHeader';
  }
  casaRav() {
    this.casaName = this.wizardsRav;
    this.casaColor = 'colorRav';
    this.casaHeaderColor = 'colorRavHeader';
  }
}
