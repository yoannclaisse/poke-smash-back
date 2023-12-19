# Projet poke smash VueJS et Express
Le projet poke smash est un tinder like basé sur les pokemons.
<br/>
<br/>
Pour resoudre le problème de CORS 
```bash
google-chrome --disable-web-security --user-data-dir='pathToDirectory'

```
---

## Clone des projets :
Pour que ce projet soit fonctionnel, il faut le repo du front et celui du back accessible sur github :
**Repo front :**
```bash
git clone https://github.com/yoannclaisse/poke-smash-front.git
```
**Repo back :**
```bash
git clone https://github.com/yoannclaisse/poke-smash-back.git
```
<br/>
<br/>

---

##Instalation des dépendances avec npm
Pour que toutes les dépendances soient instalées (il faut le faire pour le **FRONT et le BACK**) :
```bash
npm i
```
<br/>
<br/>

---

##Run des projets
<br/>**BACK :**<br/>
Pour le back il faut créer un fichier .env avec ces info:
```.env
PORT=9999

MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=efrei
MYSQL_USER=ylecocq
MYSQL_PASSWORD=password

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://ylecocq:password@localhost:3307/efrei?schema=public"
```

- Initialise la base de donnée avec docker et install "adminer" (GUI pour la DB accessible sur le port 8080)
```bash
npm run dockerDb
```
<br/>

- Initialise la DB par rapport au schéma Prisma

```bash
npm run dbUpdate
```
<br/>

- Run le server sur le port 9999
```bash
npm run dev
```
<br/>**BACK :**<br/>
Run le server sur le port 5173
```bash
npm run dev
```
<br/>
<br/>

---
