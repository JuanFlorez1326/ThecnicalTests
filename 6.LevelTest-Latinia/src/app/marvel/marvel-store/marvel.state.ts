import { CharacterState } from './characters/characters.state';
import { StoriesState } from './stories/stories.state';
import { ComicsState } from './comics/comics.state';

export interface MarvelState {
    characters: CharacterState;
    stories: StoriesState;
    comics: ComicsState;
}