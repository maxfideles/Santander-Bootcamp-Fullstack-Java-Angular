import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attributes',
  templateUrl: './comp-attributes.component.html',
  styleUrls: ['./comp-attributes.component.css']
})
export class CompAttributesComponent implements OnInit {  
  estilo:string = "enable"
  corFundo:string = "red"
  corFonte:string = "white"

  theme():void{
    if(this.estilo != "enable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
