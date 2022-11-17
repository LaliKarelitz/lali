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
  arrBasket: Shoe[] | undefined;
  @Input()
  addButtonText: string | undefined;
  @Output()
  myAddToBasketEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  createEventt(item: Shoe) {
    this.myAddToBasketEvent.emit()
  }

  func(id: any) {
    if (this.addButtonText == 'הוסף לסל') {
      let index = this.arrShoes?.findIndex(o => o.id == id);
      this.arrBasket?.push(this.arrShoes[index]);
    }
    else {
      let index = this.arrBasket.findIndex(i => i.id == id);
      this.arrBasket.splice(index, 1);
    }

  }

}
