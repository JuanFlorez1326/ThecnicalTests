import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './characters.actions';
import * as fromAdapter from './characters.adapter';
import { CharacterState } from './characters.state';

export const initialState: CharacterState =  fromAdapter.adapter.getInitialState({
    isLoading: false,
    success: false,
    error: null
});

export function CharactersReducer(state = initialState, action: fromActions.CHARACTER_ACTIONS): CharacterState {
    switch (action.type) {
        case fromActions.CharacterActionTypes.LOAD_CHARACTERS: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.CharacterActionTypes.LOAD_CHARACTERS_SUCCESS: {
            return fromAdapter.adapter.setAll(action.payload.data.results, {...state, isLoading: false, success: true, error: null });
        }
        case fromActions.CharacterActionTypes.LOAD_CHARACTER_BY_ID: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.CharacterActionTypes.LOAD_CHARACTERS_SUCCESS: {
            return fromAdapter.adapter.setOne(action.payload.data.results, {...state, isLoading: false, success: true, error: null });
        }
        case fromActions.CharacterActionTypes.LOAD_CHARACTERS_ERROR: {
            return {...state, isLoading: false, success: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const getCharactersState = createFeatureSelector<CharacterState>('charactersState');
export const selectCharacters = createSelector(getCharactersState, fromAdapter.adapter.getSelectors().selectAll);
export const selectCharactersLoading = createSelector(getCharactersState, (state: CharacterState) => state.isLoading);
export const selectCharactersSuccess = createSelector(getCharactersState, (state: CharacterState) => state.success);
export const selectCharactersError = createSelector(getCharactersState, (state: CharacterState) => state.error);