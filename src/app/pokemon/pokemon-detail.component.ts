import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailDto } from './pokemonDetailDto';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'pokemon-detail',
    templateUrl: './pokemon-detail.html',
})
export class PokemonDetailComponent implements OnInit {
    pokemon!: PokemonDetailDto;

    constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
    ) {}

    getPokemon(id: string) {
    this.pokemonService
          .getPokemon(id)
        .subscribe((data) => (this.pokemon = data));
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.getPokemon(id);
    }
  }
}
