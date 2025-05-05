import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Pokemons, Pokemon } from '../interfaces/pokemons';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [NgIf, NgFor, ModalComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'] // era `styleUrl`, corregido a `styleUrls`
})
export class CardComponent implements OnChanges {
  @Input() public pokemonsAll: Pokemons | undefined;
  @ViewChild(ModalComponent) public modal!: ModalComponent;

  CargaImagen: boolean = false;
  selectedPokemon!: Pokemon;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonsAll']) {
      this.CargaImagen = false;
    }
  }

  openModal(pokemon: Pokemon): void {
    if (this.modal) {
      this.modal.open(pokemon);
    }
  }
}
