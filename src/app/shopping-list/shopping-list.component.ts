import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('wheat',2,'Kg'),
    new Ingredient('Apple',1,'Kg'),
    new Ingredient('Tomato',500,'g')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
