function whatTypeAmI<T>(arg: T) {
    return arg;
}

let imString = whatTypeAmI('Hello World');
let imNumber = whatTypeAmI( 100 );
let imArray = whatTypeAmI( [1,2,3,4,5,6,7,8,9,10] );

let imExplicit = whatTypeAmI<number>(100);