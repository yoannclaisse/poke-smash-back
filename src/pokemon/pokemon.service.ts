import {Pokemon} from "./pokemon";

export interface PokemonService {
    getById(id: number): Pokemon | null;
    getByName(name: string): Pokemon | null
}