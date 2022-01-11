import { Product, calculateIVA } from './exercises/06-functionDestructuring';
/*
    ===== Código de TypeScript =====
*/

const marketCart: Product[] = [
    {
        description: 'Phone 1',
        price: 100
    },
    {
        description: 'Phone 2',
        price: 150
    }
];

// console.log( marketCart);


const [ total, iva ] = calculateIVA( marketCart );

console.log( 'Total: ', total);
console.log( 'IVA: ', iva);
