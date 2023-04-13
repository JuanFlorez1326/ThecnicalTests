import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ApiResponse } from '../../interfaces/api-response.interface';
import { ResultCharacter } from '../../interfaces/characters.interface';
import { ResultStory } from '../../interfaces/stories.interface';
import { ResultComic } from '../../interfaces/comics.interface';
import { Formats } from '../../components/comics/formats-comics';

import { MarvelState } from '../../marvel-store/marvel.state';
import { LoadStories } from '../../marvel-store/stories/stories.actions';
import { LoadCharacterById } from '../../marvel-store/characters/characters.actions';
import  * as fromReducersStory  from '../../marvel-store/stories/stories.reducers';
import * as fromReducersCharacter from '../../marvel-store/characters/characters.reducers';
import { MarvelService } from '../../services/marvel.service';


@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html'
})
export class DetailedComponent {

  constructor(
    private readonly marvelService: MarvelService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store<MarvelState>
  ) { }

  comics: ResultComic[] = [];
  stories$: Observable<ResultStory[]> = new Observable<ResultStory[]>(); 
  characters$: Observable<ResultCharacter[]> = new Observable<ResultCharacter[]>();
  
  formats: string[] = Object.values(Formats);
  formatActive!: string;
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.store.dispatch( new LoadStories( this.activatedRoute.snapshot.params['id']))
    this.store.dispatch( new LoadCharacterById( this.activatedRoute.snapshot.params['id']))

    this.stories$ = this.store.select( fromReducersStory.selectStories )
    this.characters$ = this.store.select( fromReducersCharacter.selectCharacters )

    this.getComics();
  }

  getComics(): void {
    this.subscription.add( 
      this.activatedRoute.params
      .pipe< ApiResponse, ResultComic[] > (
        switchMap( ({ id }) => this.marvelService.getComicsById( id )),
        map( ( res: any ) => res.data.results )
      )
      .subscribe(
        ( response: ResultComic[] ) => {
          this.comics = response;
        }
      )
    );
  }

  filterByFormat( format: string ): void {
    if ( format === this.formatActive ) { return; }
    this.formatActive = format;
    
    this.subscription.add( 
      this.activatedRoute.params
      .pipe< ApiResponse, ResultComic[] > (
        switchMap( ({ id }) => this.marvelService.getComicsById( id, { format } )),
        map( ( res: any ) => res.data.results )
      )
      .subscribe(
        ( response: ResultComic[] ) => {
          this.comics = response;
        }
      )
    );
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }
}