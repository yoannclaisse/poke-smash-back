import {Router} from "express";
import {PokemonController} from "./pokemon.controller";

export class PokemonRouteur{
    routeur = Router();

    constructor(private pokemonController: PokemonController) {
        this.configureRoutes();
    }

    private configureRoutes(): void{
        const express = require('express')
        const cors = require('cors')

        this.routeur.use(cors())
        this.routeur.get('/:id',async (req, res, next) => {
            try {
                if (!Number.isNaN(parseInt(req.params.id))) {
                    let id = parseInt(req.params.id);
                    const result = await this.pokemonController.getById(id);
                    res.status(200).json(result);
                } else {
                    let name = req.params.id;
                    const result = await this.pokemonController.getByName(name);
                    res.status(200).json(result);
                }
            } catch (error: unknown) {
                next(error);
            }
        });
        this.routeur.post('/:id',async (req, res, next) => {
            try {
                if (!Number.isNaN(parseInt(req.params.id))) {
                    let id = parseInt(req.params.id);
                    let comment = req.body.comment;
                    const result = await this.pokemonController.postCommentById(id, comment);
                    res.status(200).json(result);
                } else {
                    let name = req.params.id;
                    let comment = req.body.comment;
                    const result = await this.pokemonController.postCommentByName(name, comment);
                    res.status(200).json(result);
                }
            } catch (error: unknown) {
                next(error);
            }
        });
    }
}