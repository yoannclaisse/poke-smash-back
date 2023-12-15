import {Pokemon} from "./pokemon";

export interface PokemonService {
    getById(id: number): Promise<Pokemon | null>;
    getByName(name: string): Promise<Pokemon | null>;
    postCommentById(id: number, comment: string): Promise<Pokemon | null>;
    postCommentByName(name: string, comment: string): Promise<Pokemon | null>;
}