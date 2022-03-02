import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
<<<<<<< HEAD
import { HeroService } from '../hero.service'
=======
import { HEROES } from '../mock-heroes'
>>>>>>> 8eada7a2b8d52bea80b9eb9a6e092b7e630e14d9

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  clearHero(): void {
    this.selectedHero = undefined;
  }
 
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
