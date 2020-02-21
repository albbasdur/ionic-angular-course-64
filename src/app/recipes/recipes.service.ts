import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Zucchini Cream',
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

  getAllRecipes() {
      // Return a COPY of the recipes (spread operator). Not of the objects in the array, but 
      // of the array itself at least. See: https://academin.com/learn/javascript/reference-vs-primitive-values
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
