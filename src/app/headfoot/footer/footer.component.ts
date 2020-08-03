import { Component, OnInit, Input } from '@angular/core';
import {MyBio} from '../../MyBio'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   cadate = new Date();
  constructor() { }

  @Input() contentInfo:MyBio
  ngOnInit(): void {
  }
cdate= new Date();



}
