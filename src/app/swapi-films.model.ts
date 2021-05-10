export class SwapiFilms {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: any[];
    starships: any[];
    vehicles: any[];
    characters: any[];
    planets: any[];
    url: string;
    created: string;
    edited: string;

    constructor() {
        this.title = '';
        this.episode_id = 0;
        this.opening_crawl = '';
        this.director = '';
        this.producer = '';
        this.release_date = '';
        this.species = [];
        this.starships = [];
        this.vehicles = [];
        this.characters = [];
        this.planets = [];
        this.url = '';
        this.created = '';
        this.edited = '';
    }
}
