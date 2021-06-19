import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModelDrivenFormComponent } from './model-driven-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ModelDrivenFormComponent', () => {
  let component: ModelDrivenFormComponent;
  let fixture: ComponentFixture<ModelDrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ ModelDrivenFormComponent ]
    })

    fixture = TestBed.createComponent(ModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // Testing components properties and methods


  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have form object', () => {
    expect(component.form).toBeTruthy();
  });


  // Testing template render
});
