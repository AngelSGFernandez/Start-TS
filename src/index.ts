
/*
    ===== Código de TypeScript =====
*/


class Hero {
     alterEgo: string;
     age: number;
     realName: string;

    printName() {
        return this.alterEgo + ' ' + this.realName;
    }
}


 const superman = new Hero();