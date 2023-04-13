import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ResultComic } from '../../interfaces/comics.interface';

export const adapter: EntityAdapter<ResultComic> = createEntityAdapter<ResultComic>({
    selectId: (comic: ResultComic) => comic.id
});

export const {
    selectAll: selectAllComics
} = adapter.getSelectors();