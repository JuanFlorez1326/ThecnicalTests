import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './stories.actions';
import * as fromAdapter from './stories.adapter';
import { StoriesState } from './stories.state';

export const initialState: StoriesState =  fromAdapter.adapter.getInitialState({
    isLoading: false,
    success: false,
    error: null
});

export function StoriesReducer(state = initialState, action: fromActions.STORY_ACTIONS): StoriesState {
    switch (action.type) {
        case fromActions.StoryActionTypes.LOAD_STORIES: {
            return { ...state, isLoading: true, success: false, error: null };
        }
        case fromActions.StoryActionTypes.LOAD_STORIES_SUCCESS: {
            return fromAdapter.adapter.setAll(action.payload.data.results, {...state, isLoading: false, success: true, error: null });
        }
        case fromActions.StoryActionTypes.LOAD_STORIES_ERROR: {
            return {...state, isLoading: false, success: false, error: action.payload };
        }
        default: {
            return state;
        }
    }
}

export const getStoriesState = createFeatureSelector<StoriesState>('storiesState');
export const selectStories = createSelector(getStoriesState, fromAdapter.adapter.getSelectors().selectAll);
export const selectStoriesLoading = createSelector(getStoriesState, (state: StoriesState) => state.isLoading);
export const selectStoriesSuccess = createSelector(getStoriesState, (state: StoriesState) => state.success);
export const selectStoriesError = createSelector(getStoriesState, (state: StoriesState) => state.error);