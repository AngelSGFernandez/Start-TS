


/*
    ===== Código de TypeScript =====
*/

interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Redmi Note 5',
    price: 150
}

const tablet: Product = {
    description: 'Mi Pad',
    price: 350
}

function calculateIVA( products: Product[] ): [number, number] {

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * 0.16];
}

const articles = [ phone, tablet ];

const [ total, iva ] = calculateIVA( articles );

console.log( 'Total: ', total );
console.log( 'IVA: ', iva )


