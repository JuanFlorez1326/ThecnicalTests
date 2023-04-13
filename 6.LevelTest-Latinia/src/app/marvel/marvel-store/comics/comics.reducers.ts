import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './comics.actions';
import * as fromAdapter from './comics.adaper';
import { ComicsState } from './comics.state';

export const initialState: ComicsState =  fromAdapter.adapter.getInitialState({
    isLoading: false,
    success: false,
    error: null
});

export function ComicsReducer(state = initialState, action: fromActions.COMIC_ACTIONS): ComicsState {
    switch (action.type) {
        case fromActions.ComicActionTypes.LOAD_COMICS: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.ComicActionTypes.LOAD_COMICS_SUCCESS: {
            return fromAdapter.adapter.setAll(action.payload.data.results, {...state, isLoading: false, success: true, error: null });
        }
        case fromActions.ComicActionTypes.LOAD_COMICS_ERROR: {
            return {...state, isLoading: false, success: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const getComicsState = createFeatureSelector<ComicsState>('comicsState');
export const selectComics = createSelector(getComicsState, fromAdapter.adapter.getSelectors().selectAll);
export const selectComicsLoading = createSelector(getComicsState, (state: ComicsState) => state.isLoading);
export const selectComicsSuccess = createSelector(getComicsState, (state: ComicsState) => state.success);
export const selectComicsError = createSelector(getComicsState, (state: ComicsState) => state.error);