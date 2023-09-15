import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []

  constructor() {

    this.produtos = ["Mouse", "Keyboard", "Display","Power"]

  }

  add():void{
    this.produtos.push("Max")
  }

  ngOnInit(): void {


  }

  remove(index:number){
    this.produtos.splice(index,1)
  }

}
