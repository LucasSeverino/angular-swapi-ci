import { SwapiFilms } from './swapi-films.model';

export interface SwapiResponseModel<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}
