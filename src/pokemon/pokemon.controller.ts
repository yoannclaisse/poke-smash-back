import {PokemonService} from "./pokemon.service";
import {Pokemon} from "./pokemon";

export class PokemonController {
    constructor(private pokemonService: PokemonService) {
    }

    getById(id:number): Pokemon | null{
        if(!id){
            throw new Error("Id nécéssaire !")
        }

        if(!Number.isInteger(id)){
            throw new Error('L\'id doit être un nombre !');
        }

        if(id < 0){
            throw new Error('L\id ne doit pas être négatif !');
        }

        return this.pokemonService.getById(id)
    }

    getByName(name: string): Pokemon | null{
        if(!name){
            throw new Error('Le nom ne peut pas être vide !');
        }

        return this.pokemonService.getByName(name);
    }

}