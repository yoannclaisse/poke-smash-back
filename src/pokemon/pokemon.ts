export class Pokemon{
    constructor(
        public id: number,
        public name: string,
        public sprite: string,
        public smashs = 0,
        public passs = 0,
    ) {
    }
}