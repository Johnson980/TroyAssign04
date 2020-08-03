import { Component, OnInit, Input } from '@angular/core';
import {MyBio} from '../MyBio'
import {MYCOURSES} from '../../assets/data/Mycourses'
import { NONE_TYPE } from '@angular/compiler';
import {CP} from '../cpInterface';


@Component({
  selector: 'app-johnson',
  templateUrl: './johnson.component.html',
  styleUrls: ['./johnson.component.css'],
  styles: ['h3 { text-align: center; }']
})
export class JohnsonComponent implements OnInit {
i: number


outArea: string;
cpChoice: CP[];

@Input() cpNew: CP[];
@Input() cpUsed: CP[];
  constructor() { }
    mycourses=MYCOURSES

    
  @Input() contentInfo:MyBio
  ngOnInit(): void {
  }


  onClickMe(i){
    this.i= i;
    console.log(i);
  }


  showHideText(index){
    if(index == this.i){
      return "block"
    }
    else
    {
      return "none";
    }
  }

displayJSON(cars)
{
  switch(cars){
  case 1: this.cpChoice= this.cpNew; break;
  case 2: this.cpChoice= this.cpUsed; break;
}

this.outArea=`<h3>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;List of ${cars}</h3>`   
this.outArea+=`<table><tr><th>Make</th><th>Type</th><th>Engine</th><th>Cost</th><th>Color</th>
</tr>`;


for (let cls of this.cpChoice) {
  this.outArea+=`<tr>
  <td><strong> ${cls.make} </strong></td>
  <td> ${cls.type} </td><td> ${cls.engine} </td>
  <td> ${cls.cost} </td>
  <td> ${cls.color} </td>
  </tr>`;   }


}



}
