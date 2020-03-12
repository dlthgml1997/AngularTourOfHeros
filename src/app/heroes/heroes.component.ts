import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : Hero[];

  constructor(private heroService: HeroService) { } // 의존성 주입 시스템이 d인스턴스를 찾아서 전달

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
