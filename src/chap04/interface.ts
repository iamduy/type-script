
interface Named{
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string) : void;
}

class Person implements Greetable {
    name : string;
    age = 20;

    constructor(n:string){
        this.name = n;
    }

    greet(phrase){
        console.log(`${phrase} : ${this.name}`);
    }
}

export default Person