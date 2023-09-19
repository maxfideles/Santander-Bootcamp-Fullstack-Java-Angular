import { Component, OnInit, Input } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

   pokemon?: PokemonData | any
  @Input ()
  pokeName:string = "Bulbasaur"
  @Input ()
  pokeImg:string = "https://m.media-amazon.com/images/I/51afsafzcjL._AC_UF894,1000_QL80_.jpg"
  @Input()
  pokeTyps:string[]=["Grass","Water"]

  constructor(private service: PokemonService) { }

  ngOnInit(): void {

    this.service.getPokemon("bulbasaur").subscribe(
      {
        next: (response) => {
         
          this.pokemon={
            id: response.id,
            name: response.name,
            sprites: response.sprites.other.dream_world.front_default,
            types: response.types
          }
          console.log(this.pokemon)
        },
        error: (erro) => console.log(erro)
      }


    )

  }

}
