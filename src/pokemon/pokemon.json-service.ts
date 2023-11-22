import {PokemonService} from "./pokemon.service";
import {Pokemon} from "./pokemon";

export class PokemonJsonService implements PokemonService{
    getById(id: number): Pokemon | null {
        const urlPokemon = 'https://ex.traction.one/pokedex/pokemon/'+id;
    }

    getByName(name: string): Pokemon | null {
        throw new Error("Method not implemented.");
    }

}