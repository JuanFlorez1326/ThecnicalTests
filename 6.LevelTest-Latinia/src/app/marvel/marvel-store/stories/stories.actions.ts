import { Action } from '@ngrx/store';
import { ApiResponse } from '../../interfaces/api-response.interface';

export enum StoryActionTypes {
    LOAD_STORIES = '[Story] Load Stories',
    LOAD_STORIES_SUCCESS = '[Story] Load Stories Success',
    LOAD_STORIES_ERROR = '[Story] Load Stories Failure',
}

export class LoadStories implements Action {
    readonly type = StoryActionTypes.LOAD_STORIES;
    constructor( public payload: string ) {}
}

export class LoadStoriesSuccess implements Action {
    readonly type = StoryActionTypes.LOAD_STORIES_SUCCESS;
    constructor( public payload:  ApiResponse ) {}
}

export class LoadStoriesError implements Action {
    readonly type = StoryActionTypes.LOAD_STORIES_ERROR;
    constructor( public payload: any ) {}
}

export type STORY_ACTIONS =
    | LoadStories
    | LoadStoriesSuccess
    | LoadStoriesError;