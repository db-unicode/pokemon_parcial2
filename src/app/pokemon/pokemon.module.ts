import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokemonListComponent, PokemonDetailComponent],
  exports: [PokemonListComponent, PokemonDetailComponent]
})
export class PokemonModule { }
