import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipesData:Recipe[] = [
    new Recipe('Pizza','Italian Cheesy multigrain pan','https://curlytales.com/wp-content/uploads/2019/09/chianti.jpg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
