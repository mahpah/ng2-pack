import {
  Component,
  OnInit,
} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroService} from './../../services/hero.service.ts';

const range = (from, to, step = 1) => {
  let arr = [];
  for (let i = from; i < to; i += step) {
    arr.push(i);
  }
  return arr;
};

@Component({
  selector: 'hero-editor',
  templateUrl: require('./hero-editor.tpl.html'),
})
export class HeroEditorComponent implements OnInit {
  public hero: app.IHero;
  public scoreRange = range(0, 10);

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
  ) {}

  public ngOnInit() {
    let heroId = this.routeParams.get('id');

    this.heroService.getHeroById(heroId)
      .then(data => {
        this.hero = data;
      })
      .catch(console.error.bind(console));
  }
}