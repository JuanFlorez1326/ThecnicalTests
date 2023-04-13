import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ResultCharacter } from '../../interfaces/characters.interface';

export const adapter: EntityAdapter<ResultCharacter> = createEntityAdapter<ResultCharacter>({
    selectId: (character: ResultCharacter) => character.id
});

export const {
    selectAll: selectAllCharacters,
} = adapter.getSelectors();