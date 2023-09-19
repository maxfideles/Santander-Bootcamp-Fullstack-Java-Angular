import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input ()
  pokeName:string = "Bulbasaur"
  @Input ()
  pokeImg:string = "https://m.media-amazon.com/images/I/51afsafzcjL._AC_UF894,1000_QL80_.jpg"
  @Input()
  pokeTyps:string[]=["Grass","Water"]

  constructor(private service: PokemonService) { }

  ngOnInit(): void {

    this.service.getPokemon("ditto").subscribe(
      {
        next: (response) => console.log(response),
        error: (erro) => console.log(erro)
      }


    )

  }

}
