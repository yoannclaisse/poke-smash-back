# Projet poke smash VueJS et Express
Le projet poke smash est un tinder like basé sur les pokemons.
<br/>
<br/>
Pour resoudre le problème de CORS 
```bash
google-chrome --disable-web-security --user-data-dir='~/Bureau/cache-chrome-poke'
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
Pour que toutes les dépendances soient instalées (il faut le faire pour le front et le back) :
```bash
npm i
```
<br/>
<br/>

---

##Run des projets
<br/>front :

```bash
npm run dev
```

back :
```bash
npm run dev
```
<br/>
<br/>

---

## Annexe de documentation pour prisma (interaction avec la DB)
**Instalation de prisma :**
```bash
npm instal prisma mysql2
```
<br/>
<br/>

---


**Initialiser prisma**
```bash
npx prisma init
```
génère un fichier schema.prisma et ajoute DATABASE_URL dans le .env (DATABASE_URL="mysql://johndoe:randompassword@localhost:5432/mydb?schema=public") à modifier.
<br/>
<br/>

---


**Créer un modèle pour la DB**
```bash
npx prisma introspect
```
Cela interrogera votre base de données et mettra à jour automatiquement le modèle Prisma dans le fichier schema.prisma en fonction de la structure de la base de données.
<br/>
<br/>

---

**Générer le client Prisma**
```bash
npx prisma generate
```
Cela générera les fichiers nécessaires dans le répertoire ./generated/client.
<br/>
<br/>

---

**Note pour ce projet avec Prisma et NPM**
Pour ce projet, s'il y a des modification faite sur la structure de la base données, il faut que prisma puisse le mettre à jour, il faut faire : 
```bash
npx prisma introspect
```
et 
```bash
npx prisma générate
```
Dans ce projet si une modification de la structure de la DB a été faite, il faut juste faire : 
```bash
npm run dbUpdate
```