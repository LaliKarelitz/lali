import { Component, EventEmitter } from '@angular/core';
import Shoe from 'src/models/Sheo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrInStock: Shoe[] = [
    new Shoe(1, "papaya", "123", false, 100, "../assets/carlogo.png"),
    new Shoe(2, "papaya", "lll", false, 80, "../assets/carlogo.png"),
    new Shoe(3, "nine west", "879", false, 230, "../assets/carlogo.png"),
  ]
  arrInSale: Shoe[] = [
    new Shoe(1, "papaya", "123", false, 100, "../assets/carlogo.png"),
    new Shoe(2, "papaya", "123", false, 80, "../assets/carlogo.png"),
  ]
  arrBasket: Shoe[] = [
  ];

  constructor() { }

  ngOnInit(): void {
  }


  addToBasket(id: any) {
    console.log('aaa')
    let index = this.arrInStock.findIndex(o => o.id == id);
    this.arrBasket.push(this.arrInStock[index]);
  }
  removeFromBasket(id: any) {
    let index = this.arrBasket.findIndex(i => i.id == id);
    this.arrBasket.splice(index, 1);
  }
}
