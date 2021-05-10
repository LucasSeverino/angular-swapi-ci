import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestOneComponent } from './unit-test-one.component';

describe('UnitTestOneComponent', () => {
  // let component: UnitTestOneComponent;
  // let fixture: ComponentFixture<UnitTestOneComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ UnitTestOneComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UnitTestOneComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  let component: UnitTestOneComponent;
  let fixture: ComponentFixture<UnitTestOneComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestOneComponent]
    });

    fixture = TestBed.createComponent(UnitTestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('valida criação de componente', () => {
    expect(component).toBeTruthy();
  });


  it('valida se existe a função de soma add()', () => {
    expect(component.add).toBeTruthy();
  });


  it('validar se a soma está correta', () => {
    expect(component.add(2, 3)).toEqual(5);
  });

  it('validar se o template reflete o estado da propriedade deitadoNoParabrisa', () => {
    let elem: HTMLElement = fixture.nativeElement;
    expect(elem.querySelector('p').textContent).toEqual('quebrou o polegar');
    component.toggle();
    fixture.detectChanges();
    expect(elem.querySelector('p').textContent).toEqual('Deitado');
    // component.toggle();
    // expect(component.deitadoNoParabrisa).toEqual(false);
  });
});
