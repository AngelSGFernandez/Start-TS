
/*
    ===== Código de TypeScript =====
*/


class Hero {
    //  alterEgo: string;
    //  age: number;
    //  realName: string;

    // constructor( alterEgo: string ) {
    //     this.alterEgo = alterEgo;
    // }

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {}
    }


 const wally = new Hero( 'Flash', 20, 'Wally West');

 console.log( wally )