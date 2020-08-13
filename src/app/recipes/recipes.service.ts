import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes:Recipe[] =[
    {
      id: 'r1',
      title: 'Masala-Dosa',
      imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80',
      ingredints: [ 'potatoes', 'onion', 'ginger', 'green chilies', 'curry leaves'],
    },
    {
      id: 'r2',
      title: 'Gobi Manchurian',
      imageUrl: 'https://lh3.googleusercontent.com/FiCEG8PFsS5GPWaZ8laLcLm4jVtK23BAEA0sPipALl73A9-v4_PeqkUBzn-fITEyX3UBefsQBMl4wArwHgE5WA=s640-c-rw-v1-e365',
      ingredints: [ 'cauliflower', 'cooking oil', 'finely chopped garlic', 'chopped ginger', 'coriander powder'],
    },
    {
      id: 'r3',
      title: 'Pasta',
      imageUrl: 'https://images.unsplash.com/photo-1585672840829-d4ed3abbfb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=646&q=80',
      ingredints: [ 'ground turkey', 'fresh parsley', 'allspice', 'ketchup', 'Chess'],
    },
    {
      id: 'r4',
      title: 'Chinese Fried Rice',
      imageUrl: 'https://images.unsplash.com/photo-1504670555658-db8fb2e908ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      ingredints: [ ' carrot', 'beef', 'onion', 'garlic', 'cooking oil'],
    },
  ]

  constructor() { }

  getallRecipes(){
    return [...this.recipes]; 
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>{
        return recipe.id === recipeId; 
      }),
    };
  }

  deleteRecipe(recipeId:string){
      this.recipes=this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
      });
  }

}
