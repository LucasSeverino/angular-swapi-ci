import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { OnOffComponent } from './on-off/on-off.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UnitTestOneComponent } from './unit-test-one/unit-test-one.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        
      ],
      providers: [AppService]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'add()' function`, () => {
    expect(component.add).toBeTruthy();
  });

  it(`should have add(param1, param2) function with params '2' and '3' returning the sum: 5`, () => {
    expect(component.add(2, 3)).toBe(5);
  });
});
