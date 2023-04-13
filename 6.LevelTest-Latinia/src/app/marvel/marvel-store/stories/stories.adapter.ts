import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ResultStory } from '../../interfaces/stories.interface';

export const adapter: EntityAdapter<ResultStory> = createEntityAdapter<ResultStory>({
    selectId: (story: ResultStory) => story.id
});

export const {
    selectAll: selectAllStories,
} = adapter.getSelectors();