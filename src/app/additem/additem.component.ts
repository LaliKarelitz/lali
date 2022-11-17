import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Shoe from 'src/models/Sheo';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  @Input()
  itemm: Shoe | undefined;
  @Output()
  AddToArrInStock = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  createEventt(item: Shoe) {
    this.AddToArrInStock.emit(item.id)
  }
}

