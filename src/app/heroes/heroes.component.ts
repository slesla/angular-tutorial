import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    dob: Date.now(),
  };

  // The parameter heroService simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  // When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // Observable.subscribe()
  // The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  // That won't work when the HeroService is actually making requests of a remote server.
  // The new version waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  // This asynchronous approach works when the HeroService requests heroes from the server.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
