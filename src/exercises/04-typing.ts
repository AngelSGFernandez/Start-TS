


/*
    ===== Código de TypeScript =====
*/

interface Other {
    other1: string,
    other2: string
}

interface Address {
    street: string,
    country: string,
    city: string,
    other: Other
}

interface SuperHero {
    name: string,
    age: number,
    address: Address,
    showAddress: () => string
}


const superHero: SuperHero = {
    name: 'Daredevil',
    age: 35,
    address: {
        street: 'Main St',
        country: 'USA',
        city: "Hell's Kitchen",
        other: {
            other1: 'h',
            other2: 'h'
        }
            },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country + ', ' + this.address.other.other1;
    }
}

const address = superHero.showAddress();
console.log( address )
