import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  maVariable: string = 'Une variabe';
  type: string = 'text';
  hello: string = 'Hello World (click here)';
  color: string = 'blue';

  constructor() { }

  ngOnInit() {
  }

  event(textColor: string): void {
    this.color = textColor;
    this.hello = 'Hello Dyma !';
  }
}
