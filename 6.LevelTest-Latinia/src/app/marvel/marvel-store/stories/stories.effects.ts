import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromActions from './stories.actions';
import { MarvelService } from "../../services/marvel.service";

@Injectable()
export class StoriesEffects {
    
    constructor(
        private actions$: Actions,
        private marvelService: MarvelService
    ) {}

    loadStories$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.StoryActionTypes.LOAD_STORIES),
            mergeMap((action: fromActions.LoadStories ) => 
                this.marvelService.getStoriesById(action.payload).pipe(
                    map(( stories ) => {
                        return new fromActions.LoadStoriesSuccess(stories);
                    }),
                    catchError(error => of(new fromActions.LoadStoriesError(error)))
                )
            )
        );
    });

}