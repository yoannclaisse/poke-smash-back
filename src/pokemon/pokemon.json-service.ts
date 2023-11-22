import {PokemonService} from "./pokemon.service";
import {Pokemon} from "./pokemon";

export class PokemonJsonService implements PokemonService{
    getById(id: number): Pokemon | null {
        throw new Error("Method not implemented.");
    }

    getByName(name: string): Pokemon | null {
        throw new Error("Method not implemented.");
    }

}