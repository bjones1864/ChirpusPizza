import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChirpusPizza';

  menu: MenuItem[] = [
    {
      name: "Pepperoni Pizza Slice",
      category: "Entree",
      price: 3,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Cheese Pizza Slice",
      category: "Entree",
      price: 2.75,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Pepperoni Pizza",
      category: "Entree",
      price: 11,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Cheese Pizza",
      category: "Entree",
      price: 10,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Cheeseburger",
      category: "Entree",
      price: 6,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "French Fries",
      category: "Side",
      price: 2,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Cheese Bread",
      category: "Side",
      price: 2.50,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Wings",
      category: "Side",
      price: 8,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Ice Cream",
      category: "Dessert",
      price: 4,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Ice Cream w/ Bacon",
      category: "Dessert",
      price: 6,
      vegetarian: false,
      soldOut: true
    },
  ];

  cart: MenuItem[] = [];

  addToCart(m: MenuItem): void {
    this.cart.push(m);
    console.log(this.cart);
  }

  getTotal(): number {
    return this.cart.reduce((total, next) => total + next.price, 0);
  }
}

