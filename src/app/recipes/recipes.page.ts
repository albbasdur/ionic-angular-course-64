import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Zucchini Cream (2 persons)',
      imageUrl: 'https://www.thermorecetas.com/wp-content/uploads/2010/03/crema.jpg',
      ingredients: ['2 Big Potatoes', '2 Zucchinis', '1 Onion', 'Avecrem', 'Salt', 'Pepper', 'Cheese in portions', 'Born', 'Water']
    },
    {
      id: 'r2',
      title: 'En blanco',
      imageUrl: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2016/02/pescado-en-blanco-960x540.jpg',
      ingredients: ['2 o 3 Patatas', '1 Cebolla', '1 Pimiento', '1 Tomate', '1/4 Rosada', 'Aceite de oliva', 'Sal', 'Limón']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
