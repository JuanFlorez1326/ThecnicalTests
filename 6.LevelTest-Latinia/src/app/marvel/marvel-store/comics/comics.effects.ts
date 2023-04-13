import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromActions from './comics.actions';
import { MarvelService } from "../../services/marvel.service";

@Injectable()
export class ComicsEffects {
    
    constructor(
        private actions$: Actions,
        private marvelService: MarvelService
    ) {}

    loadComics$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.ComicActionTypes.LOAD_COMICS),
            mergeMap((action: fromActions.LoadComics )  => 
                this.marvelService.getComicsById(  action.payload.id, { format: action.payload.format }).pipe(
                    map(( comics ) => {
                        return new fromActions.LoadComicsSuccess(comics);
                    }),
                    catchError(error => of(new fromActions.LoadComicsError(error)))
                )
            )
        );
    });
}
