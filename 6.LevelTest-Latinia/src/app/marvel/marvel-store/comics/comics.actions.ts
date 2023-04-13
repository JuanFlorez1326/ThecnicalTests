import { Action } from '@ngrx/store';
import { ApiResponse } from '../../interfaces/api-response.interface';

export enum ComicActionTypes {
    LOAD_COMICS = '[Comic] Load Comics',
    LOAD_COMICS_SUCCESS = '[Comic] Load Comics Success',
    LOAD_COMICS_ERROR = '[Comic] Load Comics Failure',
}

export class LoadComics implements Action {
    readonly type = ComicActionTypes.LOAD_COMICS;
    constructor( public payload: { id: string, format?: string } ) {}
}

export class LoadComicsSuccess implements Action {
    readonly type = ComicActionTypes.LOAD_COMICS_SUCCESS;
    constructor( public payload: ApiResponse ) {}
}

export class LoadComicsError implements Action {
    readonly type = ComicActionTypes.LOAD_COMICS_ERROR;
    constructor( public payload: any ) {}
}

export type COMIC_ACTIONS =
    | LoadComics
    | LoadComicsSuccess
    | LoadComicsError;