import { Component, Input, OnInit } from '@angular/core';
import Sheo from 'src/models/Sheo';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  @Input()
  myShoes: Sheo = new Sheo(0, '', '', false, 0);
  constructor() { }

  ngOnInit(): void {
  }

}
