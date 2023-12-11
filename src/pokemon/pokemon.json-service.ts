import {PokemonService} from "./pokemon.service";
import {Pokemon, PokemonDetails} from "./pokemon";

export class PokemonJsonService implements PokemonService{
    async getById(id: number): Promise<Pokemon | null> {
        const urlPokemon = 'https://ex.traction.one/pokedex/pokemon/' + id;
        const response = await fetch(urlPokemon);
        console.log(response)
        if(response.status == 200) {
            const json = await response.json();
            return new Pokemon(id, json[0].name, json[0].sprite, "");
        }
        else{
            return null;
        }
    }

    async getByName(name: string): Promise<Pokemon | null> {
        const urlPokemon = 'https://ex.traction.one/pokedex/pokemon/' + name;
        const response = await fetch(urlPokemon);
        if(response.status == 200) {
            const json = await response.json();
            return new PokemonDetails(json[0].number, name, json[0].sprite, json[0].smashes, json[0].passs, json[0].types, "");
        }
        else{
            return null;
        }
    }

    async postCommentById(id: number, comment: string): Promise<Pokemon | null> {
        const urlPokemon = 'https://ex.traction.one/pokedex/pokemon/' + id;
        const response = await fetch(urlPokemon);
        console.log(response)
        if(response.status == 200) {
            const json = await response.json();
            return new Pokemon(id, json[0].name, json[0].sprite, comment);
        }
        else{
            return null;
        }
    }

    async postCommentByName(name: string, comment: string): Promise<Pokemon | null> {
        const urlPokemon = 'https://ex.traction.one/pokedex/pokemon/' + name;
        const response = await fetch(urlPokemon);
        if(response.status == 200) {
            const json = await response.json();
            return new PokemonDetails(json[0].number, name, json[0].sprite, json[0].smashes, json[0].passs, json[0].types, comment);
        }
        else{
            return null;
        }
    }
}