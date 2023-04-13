import * as charactersReducer from './characters/characters.reducers';
import * as storiesReducer from './stories/stories.reducers';
import * as comicsReducer from './comics/comics.reducers';

export const reducers: any = {
    charactersState: charactersReducer.CharactersReducer,
    storiesState: storiesReducer.StoriesReducer,
    comicsState: comicsReducer.ComicsReducer
};