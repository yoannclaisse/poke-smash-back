export class Pokemon{
    constructor(
        public id: number,
        public name: string,
        public sprite: string,
        public comments: [],
        public smashs = 0,
        public passs = 0,
        public types = []
    ) {
    }
}
export class PokemonDetails extends Pokemon {
    constructor(
        public id: number,
        public name: string,
        public sprite: string,
        public smashs = 0,
        public passs = 0,
        // news details pokemeon
        public types: [],
        public comments: [],
        ) {

        super(id, name, sprite, comments, smashs, passs)

    }
}