import {Router} from "express";
// const { PrismaClient } = require('../../prisma/generated/client');
import {PokemonController} from "./pokemon.controller";
import { Prisma } from "@prisma/client";

export class PokemonRouteur{
    routeur = Router();

    constructor(private pokemonController: PokemonController) {
        this.configureRoutes();
    }

    private configureRoutes(): void{
        const express = require('express')
        const cors = require('cors')
        const { PrismaClient } = require('../../prisma/generated/client')
        const prisma = new PrismaClient();      


        this.routeur.use(cors())

        this.routeur.get('/testdb', async (req, res) => {
            try {
              // Exemple : Récupérer tous les pokemons depuis la base de données
              const pokemon = await prisma.pokemon.findMany();
              res.json(pokemon);
            } catch (error) {
              console.error('Erreur lors de l\'accès à la base de données', error);
              res.status(500).json({ error: 'Erreur serveur' });
            }
        });

        this.routeur.post('/comment', express.json(), async (req, res) => {
            try {
              console.log('request body : ', req.body)
            //   // Exemple : Récupérer tous les pokemons depuis la base de données
            //   const pokemon = await prisma.pokemon.findUnique({where : {pokemon_id: req.body.pokemon_id}});
            //   console.log('pokemon :', pokemon)
            //   if(pokemon == null) {
            //     await prisma.pokemon.create({
            //       data:
            //       {
            //         pokemon_id: req.body.pokemon_id,
            //         pokemon_name: '',
            //         pokemon_type_one: '',
            //         pokemon_type_two: '',
            //         pokemon_nbr_smashes: 0,
            //         pokemon_nbr_passes: 0
            //       }
            //     }
            //     )
            //   }
              const comment = await prisma.pokemon_comment.create(
                {
                  data: req.body
                }
              );
              res.json(comment);
            } catch (error) {
              console.error('Erreur lors de l\'accès à la base de données', error);
              res.status(500).json({ error: 'Erreur serveur' });
            }
        });

        this.routeur.get('/:id',async (req, res, next) => {
            try {
                let pokemon;
                if (!Number.isNaN(parseInt(req.params.id))) {
                    let id = parseInt(req.params.id);
                    const result = await this.pokemonController.getById(id);
                    pokemon = await prisma.pokemon.findUnique({where : {pokemon_id: result?.id}});
                    if(pokemon == null) {
                        await prisma.pokemon.create({
                          data:
                          {
                            pokemon_id: result?.id,
                            pokemon_name: result?.name,
                            pokemon_type_one: result?.types[0],
                            pokemon_type_two: result?.types[1] || '',
                            pokemon_nbr_smashes: 0,
                            pokemon_nbr_passes: 0
                          }
                        }
                        )
                      }
                    res.status(200).json(result);
                } else {
                    let name = req.params.id;
                    const result = await this.pokemonController.getByName(name);
                    pokemon = await prisma.pokemon.findUnique({where : {pokemon_id: result?.id}});
                    if(pokemon == null) {
                        await prisma.pokemon.create({
                          data:
                          {
                            pokemon_id: result?.id,
                            pokemon_name: result?.name,
                            pokemon_type_one: result?.types[0],
                            pokemon_type_two: result?.types[1] || '',
                            pokemon_nbr_smashes: 0,
                            pokemon_nbr_passes: 0
                          }
                        }
                        )
                      }
                    res.status(200).json(result);
                }
            } catch (error: unknown) {
                next(error);
            }
        });

        this.routeur.patch('/:id/pass',async (req, res, next) => {
            const pokemon = await prisma.pokemon.findUnique({where : {pokemon_id: +req.params.id}});
            console.log('PASS : ', pokemon)
            if(pokemon != null) {
                await prisma.pokemon.update({ where : {pokemon_id: +req.params.id},
                  data:
                  {
                    pokemon_nbr_passes: 1 + pokemon.pokemon_nbr_passes
                  }
                }
                )
              }
        });

        this.routeur.patch('/:id/smash',async (req, res, next) => {
            const pokemon = await prisma.pokemon.findUnique({where : {pokemon_id: +req.params.id}});
            console.log('SMASH : ', pokemon)
            if(pokemon != null) {
                await prisma.pokemon.update({ where : {pokemon_id: +req.params.id},
                  data:
                  {
                    pokemon_nbr_smashes: 1 + pokemon.pokemon_nbr_smashes
                  }
                }
                )
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