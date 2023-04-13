import { EntityState } from '@ngrx/entity';
import { ResultCharacter } from '../../interfaces/characters.interface';

export interface CharacterState extends EntityState<ResultCharacter> {
    isLoading: boolean;
    success: boolean;
    error: any;
}