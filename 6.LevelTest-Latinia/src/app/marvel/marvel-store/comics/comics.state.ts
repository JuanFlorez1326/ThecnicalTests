import { EntityState } from '@ngrx/entity';
import { ResultComic } from '../../interfaces/comics.interface';

export interface ComicsState extends EntityState<ResultComic> {
    isLoading: boolean;
    success: boolean;
    error: any;
}