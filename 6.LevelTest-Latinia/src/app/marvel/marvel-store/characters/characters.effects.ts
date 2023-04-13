import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromActions from './characters.actions';
import { MarvelService } from "../../services/marvel.service";

@Injectable()
export class CharactersEffects {

    constructor(
        private actions$: Actions,
        private marvelService: MarvelService
    ) {}

    loadCharacters$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.CharacterActionTypes.LOAD_CHARACTERS),
            mergeMap(()  => 
                this.marvelService.getAllCharacters().pipe(
                    map(( characters ) => {
                        return new fromActions.LoadCharactersSuccess(characters);
                    }),
                    catchError(error => of(new fromActions.LoadCharactersError(error)))
                )
            )
        );
    });

    loadCharacterById$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.CharacterActionTypes.LOAD_CHARACTER_BY_ID),
            mergeMap((action: fromActions.LoadCharacterById) => 
                this.marvelService.getCharacter(action.payload).pipe(
                    map(( character ) => {
                        return new fromActions.LoadCharactersSuccess(character);
                    }),
                    catchError(error => of(new fromActions.LoadCharactersError(error)))
                )
            )
        );
    })
}