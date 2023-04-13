import { Action } from '@ngrx/store';
import { ApiResponse } from '../../interfaces/api-response.interface';

export enum CharacterActionTypes {
    LOAD_CHARACTERS = '[Character] Load Characters',
    LOAD_CHARACTER_BY_ID = '[Character] Load Character By Id',
    LOAD_CHARACTERS_SUCCESS = '[Character] Load Characters Success',
    LOAD_CHARACTERS_ERROR = '[Character] Load Characters Failure',
}

export class LoadCharacters implements Action {
    readonly type = CharacterActionTypes.LOAD_CHARACTERS;
}

export class LoadCharacterById implements Action {
    readonly type = CharacterActionTypes.LOAD_CHARACTER_BY_ID;
    constructor( public payload: string ) {}
}

export class LoadCharactersSuccess implements Action {
    readonly type = CharacterActionTypes.LOAD_CHARACTERS_SUCCESS;
    constructor( public payload:  ApiResponse ) {}
}

export class LoadCharactersError implements Action {
    readonly type = CharacterActionTypes.LOAD_CHARACTERS_ERROR;
    constructor( public payload: any ) {}
}

export type CHARACTER_ACTIONS = 
    | LoadCharacters 
    | LoadCharactersSuccess 
    | LoadCharactersError
    | LoadCharacterById