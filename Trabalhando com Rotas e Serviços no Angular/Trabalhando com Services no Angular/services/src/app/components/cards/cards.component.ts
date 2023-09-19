import { Component, OnInit, Input } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';
import {  FormsModule } from '@angular/forms'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

   pokemon: PokemonData = {
    name: "",
    id: 0,
    sprites: "",
    types: [{
      slot:2,
      type:{
          name:"as",
      }
  }]
   }


  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    

      this.searchPokemon("bulbasaur")

  }

  searchPokemon(searchName: string){

    this.service.getPokemon(searchName).subscribe(
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
