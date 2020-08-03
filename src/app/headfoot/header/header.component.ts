import { Component, OnInit, Input } from '@angular/core';
import {MyBio} from '../../MyBio'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  @Input() contentInfo:MyBio
  ngOnInit(): void {
  }

}
