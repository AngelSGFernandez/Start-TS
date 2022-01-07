


/*
    ===== Código de TypeScript =====
*/

interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const player : Player = {
    volume: 100,
    second: 45,
    song: 'In The End',
    details: {
        author: 'Linkin Park',
        year: 2001
    }
}

const author: string = 'Jhon Doe';

const { volume, second, song, details } = player;

const { author: authorSong } = details;

// console.log( 'The current volume is: ', volume );
// console.log( 'The current second is: ', second );
// console.log( 'The current song is: ', song );
// console.log( 'The author is: ', authorSong );


const artists: string[] = [ 'Muse', 'Linkin Park', 'Monstercat'];

const [ , , p3 ] = artists;
// const [ p1, p2, p3 ] = artists;

console.log( 'Artist: ', p3 );



