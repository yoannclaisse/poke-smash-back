export class Pokemon{
    constructor(
        public id: number,
        public name: string,
        public sprite: string,
        public comment: string,
        public smashs = 0,
        public passs = 0,
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
        public comment: string,

        // news details pokemeon
        public types: string,
        
        ) {

        super(id, name, sprite, comment, smashs, passs)

    }
}