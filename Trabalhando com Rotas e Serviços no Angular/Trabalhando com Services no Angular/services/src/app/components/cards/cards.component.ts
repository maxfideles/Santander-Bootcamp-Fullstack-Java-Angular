import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input ()
  pokeName:string = "Bulbasaura"
  @Input ()
  pokeImg:string = "https://m.media-amazon.com/images/I/51afsafzcjL._AC_UF894,1000_QL80_.jpg"
  @Input()
  pokeTyps:string[]=["Grass","Water"]

  constructor() { }

  ngOnInit(): void {
  }

}
