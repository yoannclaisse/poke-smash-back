import {Pokemon} from "./pokemon";

export interface PokemonService {
    getById(id: number): Promise<Pokemon | null>;
    getByName(name: string): Promise<Pokemon | null>;
}