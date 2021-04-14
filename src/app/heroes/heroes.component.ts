import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';
import { HEROES } from '../mock-heroes';
import { Hero } from '../models/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = { name: 'Windstorm', id: 1 }

  heroes : Hero[] = []; // heroes = HEROES

  constructor( private heroService:HeroService , private messageService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

 //selectedHero? : Hero;

  // onSelect(hero: Hero) { 
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
