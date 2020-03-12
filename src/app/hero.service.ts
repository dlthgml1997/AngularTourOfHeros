import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService { 

  constructor(private messageService: MessageService) { } // 서비스에 서비스가 존재하는 경우

  getHeroes(): Observable<Hero[]> {
    // TODO: 메시지는 히어로 데이터를 가져온 후에 보내야 합니다.
    this.messageService.add(`HeroService: fetched heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
