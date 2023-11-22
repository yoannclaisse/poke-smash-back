import {PokemonService} from "./pokemon.service";
import {Pokemon} from "./pokemon";

export class PokemonJsonService implements PokemonService{
    async getById(id: number): Promise<Pokemon | null> {
        const urlPokemon = 'https://ex.traction.one/pokedex/pokemon/' + id;
        const response = await fetch(urlPokemon);
        if(response.ok) {
            const json = await response.json();
            return new Pokemon(id, json[0].name, json[0].sprite);
        }
        else{
            return null;
        }
    }

    async getByName(name: string): Promise<Pokemon | null> {
        const urlPokemon = 'https://ex.traction.one/pokedex/pokemon/' + name;
        const response = await fetch(urlPokemon);
        if(response.ok) {
            const json = await response.json();
            return new Pokemon(json[0].number, name, json[0].sprite);
        }
        else{
            return null;
        }
    }

}