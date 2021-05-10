import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-swapi-ci';

  constructor(private swService: AppService) {}

  add(param1: number, param2: number): number {
    return param1 + param2;
  }

  ngOnInit() {
    this.swService.getSwFilms().subscribe(res => {
    });
  }

}
