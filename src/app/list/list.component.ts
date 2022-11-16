import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Shoe from 'src/models/Sheo';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  arrShoes: Shoe[] | undefined;
  @Input()
  addButtonText: string | undefined;
  @Output()
  myAddToBasketEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  createEventt(item: Shoe) {
    this.myAddToBasketEvent.emit(item.id)
  }

}
