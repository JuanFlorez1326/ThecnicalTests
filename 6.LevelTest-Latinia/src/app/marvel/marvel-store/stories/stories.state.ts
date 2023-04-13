import { EntityState } from '@ngrx/entity';
import { ResultStory } from '../../interfaces/stories.interface';

export interface StoriesState extends EntityState<ResultStory> {
    isLoading: boolean;
    success: boolean;
    error: any;
}