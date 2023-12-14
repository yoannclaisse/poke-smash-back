# Utilisation de prisma dans notre projet
## Instalation de prisma avec npm


**Instalation de prisma :**
```bash
npm instal prisma mysql2
```

---


**Initialiser prisma**
```bash
npx prisma init
```
génère un fichier schema.prisma et ajoute DATABASE_URL dans le .env (DATABASE_URL="mysql://johndoe:randompassword@localhost:5432/mydb?schema=public") à modifier.

---


**Créer un modèle pour la DB**
```bash
npx prisma introspect
```
Cela interrogera votre base de données et mettra à jour automatiquement le modèle Prisma dans le fichier schema.prisma en fonction de la structure de la base de données.

---

**Générer le client Prisma**
```bash
npx prisma generate
```
Cela générera les fichiers nécessaires dans le répertoire ./generated/client.

---

