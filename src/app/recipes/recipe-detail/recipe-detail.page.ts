import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    // router is used when deleting a recipe, navigate to the recipe page
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
        // This OBSERVABLE will emit new data whenever our dynamic segment change,
        // even if we are still on the SAME PAGE but this somehow change because
        // we have a button that changes them
                    // We pass a FUNCTION to "subscribe", that will execute when we
                    // receive new data
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
          // This "recipeId" must match the name in app-routing.module.ts
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  async presentAlertForDeletion() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    });

    await alert.present();
  }

  onDeleteRecipe() {
      this.presentAlertForDeletion();
  }

}
