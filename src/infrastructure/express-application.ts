import * as dotenv from 'dotenv';
import {ExpressServer} from "./express-server";
import {ExpressRouter} from "./express-router";
import {PokemonService} from "../pokemon/pokemon.service";
import {PokemonJsonService} from "../pokemon/pokemon.json-service";

export class ExpressApplication {
    private expressRouteur!: ExpressRouter;
    private port!: string;
    private server!: ExpressServer;
    private pokemonService!: PokemonService;

    constructor() {
        this.configureEnvironment();
        this.configureServices();
        this.configureExpressRouteur();
        this.configureServerPort();
        this.configureServer();
    }

    bootstrap(): void {
        this.server.bootstrap();
    }

    private configureEnvironment(): void {
        dotenv.config({
            path: '.env',
        });
    }

    private getPort(): string {
        const port = process.env.PORT;
        if (!port) {
            throw new Error('No port was found in env file.');
        }

        return port;
    }

    private configureServices(): void {
        this.pokemonService = new PokemonJsonService();
    }

    private configureExpressRouteur(): void {
        this.expressRouteur = new ExpressRouter(this.pokemonService);
    }

    private configureServerPort(): void {
        this.port = this.getPort();
    }

    private configureServer(): void {
        this.server = new ExpressServer(this.expressRouteur, this.port);
    }
}