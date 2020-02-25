import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    // The recipes are redefined
  recipes: Recipe[];

              // With the "private" modifcator it will create a new private property 
              // for all the class
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('*************** LOADED RECIPES ***************');
    console.log(this.recipes);
  }

}
