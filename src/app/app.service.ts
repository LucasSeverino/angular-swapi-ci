import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwapiResponseModel } from './swapi-response.model';
import { SwapiFilms } from './swapi-films.model';


@Injectable()
export class AppService {

  readonly ROOT_URL = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getSwFilms() {
    return this.http.get<SwapiResponseModel<SwapiFilms>>(`${this.ROOT_URL}/films`);
  }
}
