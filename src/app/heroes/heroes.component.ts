import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = { name: 'Windstorm', id: 1 }

  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }

 selectedHero? : Hero;

  onSelect(hero: Hero) { 

    this.selectedHero = hero;

  }


}
