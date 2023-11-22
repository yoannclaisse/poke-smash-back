import {Router} from "express";
import {PokemonController} from "../pokemon/pokemon.controller";
import {PokemonRouteur} from "../pokemon/pokemon.routeur";
import {PokemonService} from "../pokemon/pokemon.service";

export class ExpressRouter{
    routeur = Router()
    private pokemonController!: PokemonController;
    private pokemonRouteur!: PokemonRouteur;

    constructor(private pokemonService: PokemonService) {
        this.configureControllers();
        this.configureRouters();
        this.configureRoutes();
    }

    private configureControllers(): void{
        this.pokemonController = new PokemonController(this.pokemonService);
    }

    private configureRouters(): void{
        this.pokemonRouteur = new PokemonRouteur(this.pokemonController);
    }

    private configureRoutes(): void{
        this.routeur.use('/pokemon', this.pokemonRouteur.routeur);
    }
}