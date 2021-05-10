import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AppService } from './app.service';
import { SwapiFilms } from './swapi-films.model';
import { SwapiResponseModel } from './swapi-response.model';

import { mock } from './films-response' ;

describe('AppService', () => {

  let service: AppService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });

    service = TestBed.get(AppService);
    httpTestingController = TestBed.get(HttpTestingController);  
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getSwFilms request', () => {
    expect(service.getSwFilms).toBeTruthy();
  });

  it('should have getSwFilms() as GET method', () => {
    service.getSwFilms().subscribe(() => {
    });

    const req = httpTestingController.expectOne(`${service.ROOT_URL}/films`);
    expect(req.request.method).toBe('GET');
  });

  it('should have getSwFilms() returning data', () => {
    let responseMock: SwapiResponseModel<SwapiFilms>;
    const httpMock = mock;

    responseMock = httpMock;

    service.getSwFilms().subscribe((response: SwapiResponseModel<SwapiFilms>) => {
      expect(response.results).toEqual(responseMock.results);
    });

    const req = httpTestingController.expectOne(`${service.ROOT_URL}/films`);
    req.flush(responseMock);
    
  });

});
