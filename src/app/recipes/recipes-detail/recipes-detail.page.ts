import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService:RecipesService,
    private router:Router,
    private altctr: ActionSheetController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        this.router.navigate(['recipes']);
        return;
      }
      const recipeId=paramMap.get('recipeId');
      this.loadedRecipe=this.recipesService.getRecipe(recipeId);

      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }

    });
  }

  async onDeleteClick(){

    const alert = await this.altctr.create({
      header: 'Are You Sure?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () =>{
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['recipes']);
          }
        }
      ]
    });  
    await alert.present();
  }
}
