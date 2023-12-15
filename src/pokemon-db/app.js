const express = require('express');
const { PrismaClient } = require('../../prisma/generated/client');
const cors = require('cors');
const { log } = require('console');


const app = express();
app.use(cors())
const prisma = new PrismaClient();

app.get('/testdb', async (req, res) => {
  try {
    // Exemple : Récupérer tous les pokemons depuis la base de données
    const pokemon = await prisma.pokemon.findMany();
    res.json(pokemon);
  } catch (error) {
    console.error('Erreur lors de l\'accès à la base de données', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.post('/comment', express.json(), async (req, res) => {
  try {
    console.log('request body : ', req.body)
    // Exemple : Récupérer tous les pokemons depuis la base de données
    const pokemon = await prisma.pokemon.findUnique({where : {pokemon_id: req.body.pokemon_id}});
    console.log('pokemon :', pokemon)
    if(pokemon == null) {
      await prisma.pokemon.create({
        data:
        {
          pokemon_id: req.body.pokemon_id,
          pokemon_name: '',
          pokemon_type_one: '',
          pokemon_type_two: '',
          pokemon_nbr_smashes: 0,
          pokemon_nbr_passes: 0
        }
      }
      )
    }
    const comment = await prisma.pokemon_comment.create(
      {
        data: req.body
      }
    );
    res.json(pokemon);
  } catch (error) {
    console.error('Erreur lors de l\'accès à la base de données', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});



const PORT2 = process.env.PORT2 || 6666;

app.listen(PORT2, () => {
  console.log(`Server is running on port ${PORT2}`);
});