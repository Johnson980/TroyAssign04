//Troy Johnson
//991-530-754

import { Component } from '@angular/core';
import {MyBio} from '../app/MyBio';
import {CP} from './cpInterface';
import cpCars from '../assets/data/cars.json'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TroyAssign04';

  MyBio:MyBio=
{name: "Troy Johnson", studentId: 991530754 , imageLocation: "../assets/images/Bmw.jpg", status:"Junior"
}

c01: CP[]=cpCars.cars.New;
c02: CP[]=cpCars.cars.Used;
}






