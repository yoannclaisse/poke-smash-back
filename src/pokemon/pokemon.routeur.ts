import {Router} from "express";
import {PokemonController} from "./pokemon.controller";

export class PokemonRouteur{
    routeur = Router();

    constructor(private pokemonController: PokemonController) {
        this.configureRoutes();
    }

    private configureRoutes(): void{
        this.routeur.get('/:id',(req, res,next) => {
            try{
                const result = this.pokemonController.getById(
                    parseInt(req.params.id),
                );
                res.status(200).json(result);
            }catch (error: unknown){
                next(error);
            }
        });
    }
}