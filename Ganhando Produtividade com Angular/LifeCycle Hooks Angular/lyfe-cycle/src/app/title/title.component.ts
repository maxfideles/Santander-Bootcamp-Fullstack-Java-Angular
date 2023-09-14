 import { Component, Input,  OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

 @Input() name: string =''

  constructor() { }
  ngOnChanges(): void {
    console.log("OnChange")
  }

  ngOnInit(): void {

    this.name = `Seja bem-vindo ${this.name}`

  }

}
