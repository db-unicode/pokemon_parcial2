import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from './pokemonDetailDto';
import { PokemonService } from './pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.html',
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonDetailDto[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  getPokemons() {
    this.pokemonList = this.pokemonService.getPokemons();
  }

  selectPokemon(pokemon: PokemonDetailDto) {
    this.router.navigate(['/pokemon-detail', pokemon.id]);
  }

  ngOnInit() {
    this.getPokemons();
  }
}
