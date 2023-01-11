import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.petitchef.it/imgupl/recipe/bistecca-alla-fiorentina--327070p532073.jpg'),
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.petitchef.it/imgupl/recipe/bistecca-alla-fiorentina--327070p532073.jpg')
];

constructor(){
}

ngOnInit() {
    
}

}
