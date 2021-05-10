import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-test-one',
  templateUrl: './unit-test-one.component.html',
  styleUrls: ['./unit-test-one.component.scss']
})
export class UnitTestOneComponent implements OnInit {
  
  title = 'Titulo do componente';
  message = 'Valor => ';
  deitadoNoParabrisa: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  toggle() {
    this.deitadoNoParabrisa = !this.deitadoNoParabrisa;
  }

}
