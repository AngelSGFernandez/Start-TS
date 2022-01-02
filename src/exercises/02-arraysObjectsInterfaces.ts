


/*
    ===== Código de TypeScript =====
*/

let skills: string[] = ['Super Strenght', 'Super Endurance', 'Super Durability'];

interface PlayerCharacter {
    name: string;
    healthPoints: number;
    skills: string[];
    origin?: string;
}

const playerCharacter : PlayerCharacter = {
    name: 'Doom Slayer',
    healthPoints: 100,
    skills: ['Super Strenght', 'Super Endurance', 'Super Durability']
}

playerCharacter.origin = 'Earth';

console.table( playerCharacter );