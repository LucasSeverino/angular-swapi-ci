import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnOffComponent } from './on-off.component';

describe('OnOffComponent', () => {
  let component: OnOffComponent;
  let fixture: ComponentFixture<OnOffComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOffComponent ]
    });
    fixture = TestBed.createComponent(OnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OnOffComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have toggle function', () => {
    expect(component.toggle).toBeTruthy();
  });

  it('should have title property', () => {
    expect(component.title).toBeTruthy()
  });

  it('should have isOn property with default value of false', () => {
    expect(component.isOn).toEqual(false);
  });

  it('should display title inside h1 tag', () => {
    const onOffElement: HTMLElement = fixture.nativeElement;
    const headingTag = onOffElement.querySelector('h1');
    expect(headingTag.textContent).toEqual(component.title);
  });

  it ('should change text when toggle() is called', () => {
    const onOffElement: HTMLElement = fixture.nativeElement;
    const messageTag = onOffElement.querySelector('p.switch-status');
    expect(component.isOn).toBe(false);
    expect(messageTag.textContent).toContain('OFF');
    component.toggle();
    fixture.detectChanges();
    expect(component.isOn).toBe(true);
    expect(messageTag.textContent).toContain('ON');
    component.toggle();
    fixture.detectChanges();
    expect(component.isOn).toBe(false);
    expect(messageTag.textContent).toContain('OFF');
  });


});
