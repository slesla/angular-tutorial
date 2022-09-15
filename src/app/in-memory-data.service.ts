import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', dob: 1234775647 },
      { id: 13, name: 'Bombasto', dob: 23444567778 },
      { id: 14, name: 'Celeritas', dob: 34564477789 },
      { id: 15, name: 'Magneta', dob: 17777777723 },
      { id: 16, name: 'RubberMan', dob: 954577777776 },
      { id: 17, name: 'Dynama', dob: 64647777777968 },
      { id: 18, name: 'Dr. IQ', dob: 67777777777779 },
      { id: 19, name: 'Magma', dob: 8877777777986 },
      { id: 20, name: 'Tornado', dob: 0 },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
