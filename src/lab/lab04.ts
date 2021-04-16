import Person from "../chap04/interface";

class lab04 {
    bai01() {
        interface AddFn {
            (a: Number, b: Number): Number
        }
        let add: AddFn;

        add = (n1: number, n2: number) => {
            return n1 + n2;
        }

        console.log('Result :', add(5, 5));
    }
    bai02() {
        interface Named {
            readonly name?: String;
        }

        interface Greetable extends Named {
            greet(phrase: string): void;
        }

        class Person implements Greetable {
            name: string;
            age = 20;

            constructor(n: string) {
                this.name = n;
            }

            greet(phrase) {
                console.log(`${phrase} : ${this.name}`);
            }
        }

        let user: Greetable;
        user = new Person('Min');
        user.greet('Hi there- I am');
        console.log(user);
    }
}
export default lab04