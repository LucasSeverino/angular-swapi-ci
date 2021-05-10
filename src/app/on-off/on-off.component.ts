import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-off',
  templateUrl: './on-off.component.html',
  styleUrls: ['./on-off.component.scss']
})
export class OnOffComponent implements OnInit {

  title = 'Click the button below to toggle';
  isOn = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOn = !this.isOn;
  }

}
