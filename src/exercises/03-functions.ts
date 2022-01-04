


/*
    ===== Código de TypeScript =====
*/
function add( a: number, b: number ): number {
    return a + b;
}

const addArrow = ( a: number, b: number ): number => {
    return a + b;
}

function multiply( number: number, otherNumber: number, base: number = 2 ): number {
    return number * base;
}

interface PlayerCharacterD {
    name: string,
    hp: number,
    showHp: () => void;
}

function cure( playerCharacter: PlayerCharacterD, cureX: number ): void {
    playerCharacter.hp += cureX;

    console.log( playerCharacter );
}

const newPlayerCharacter: PlayerCharacterD = {
    name: 'Doom Slayer',
    hp: 50,
    showHp() {
        console.log( 'Health Points:', this.hp )
    }
}

cure( newPlayerCharacter, 50 );

newPlayerCharacter.showHp();

// const resultAdd = add(10, 10);

// const resultMultiply = multiply(2, 1);

// console.log( resultAdd )
// console.log( resultMultiply )