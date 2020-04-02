import { Component, OnInit } from '@angular/core';
import { Recette } from '../hugoCuisine/recettes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  oneRecette: Recette;
  twoRecette: Recette;
  recetteList: Recette[];
  constructor() { }

  ngOnInit(): void {
    this.oneRecette = new Recette(
      8,
      'dessert',
      [{name: 'oeuf', price: 20, image: '/'},
      {name: 'sucre', price: 1, image: '/'},
      {name: 'lait', price: 1, image: '/' }],
      'Pain Perdu',
      'battre les ingredients, tremper le pain rassi, cuire à la poele');
    this.twoRecette = new Recette(
        20,
        'dessert',
        [{name: 'oeuf', price: 20, image: '/'},
        {name: 'sucre', price: 1, image: '/'},
        {name: 'lait', price: 1, image: '/' },
        {name: 'farine', price: 1, image: '/' }],
        'Crepe',
        'Mélangez, cuisez, mangez!'
        );
    this.recetteList = [this.twoRecette, this.oneRecette] ;
      }

}
