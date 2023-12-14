const express = require('express');
const { PrismaClient } = require('../../prisma/generated/client');

const app = express();
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

const PORT2 = process.env.PORT2 || 6666;

app.listen(PORT2, () => {
  console.log(`Server is running on port ${PORT2}`);
});