import _ from 'lodash'
class lab02 {
    bai01() {
        let a: number = 5;
        let b: number = 5;
        let phrase: string = 'Result is : ';
        let permit: boolean = true;
        const result = a + b;
        if (permit) {
            console.log(`${phrase} ${result}`);
        }
        else {
            console.log('Not result');
        }
    }
    bai02() {
        // function add(x=5){
        //    let phrase = 'Result is : ';

        //    phrase = 10;
        //    x = '2.5';

        //    return phrase+x;

        // }
        // let result : number = add();
        // console.log(result);
    }
    bai03() {
        interface human {
            name: String,
            age: Number
        }

        //obj
        const obj: human = {
            name: 'Duong Khanh Duy',
            age: 20
        }
        console.log(`Name : ${obj.name}`);
        console.log(`Age : ${obj.age}`);
    }
    bai04() {
        // enum Role { ADMIN, READ_ONLY, AUTHOR };
        // const person: {
        //     name: string,
        //     age: number,
        //     hobbies: string[],
        //     role: number,
        //     roleuple: [number, string];
        // } = {
        //     name: 'Typescript',
        //     age: 20,
        //     hobbies: ['Sport', 'Cooking'],
        //     role: Role.ADMIN, //why error ?
        //     roleuple: [2, 'author']
        // }

        // let favActivities: any[];
        // favActivities = [5, 'Sport', true];
        // if (person.role === Role.AUTHOR) {
        //     console.log('is author');
        // }

        // person.roleuple.push("admin");
        // person.roleuple[1] = 10;
        // person.roleuple = [0, 'admin', 'user'];

        /**Literal type & custom type**/

        // type Combinable = Number | String;
        // function combine(input1: Combinable, input2: Number | String, resConversion: 'as-number' | 'as-text') {
        //     let result;
        //     if (typeof input1 === 'number' && typeof input2 === 'number' || resConversion === 'as-number') {
        //         result = parseFloat(input1) + parseFloat(input2);
        //     } else {
        //         result = input1.toString() + input2.toString();
        //     }
        //     return result;
        // }

        // const combineNumber = combine(30, 26, 'as-number');
        // console.log(combineNumber);

        // const combineStringNumber = combine('30', '26', 'as-number');
        // console.log(combineStringNumber);

        // const combineText = combine('Typescript', 'Javascript', 'as-text');
        // console.log(combineText);
    }

    async bai05() {

        const $ = document.querySelector.bind(document);

        interface type {
            id: number;
            name: string;
            image: string;
        }

        const quantity: number = 10
        const pokemon: type[] = [];

        for (let i = 1; i <= quantity; i++) {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const myArr = await data.json();
            pokemon.push(myArr);

            const shuffle = _.shuffle(pokemon); // dùng để đảo vị trí phần tử trong 1 mảng
            console.log(shuffle);

            const res = shuffle.map((items) => {
                return /* html */`
                <div class="border-gray-900 border p-5 rounded-lg">
                  <span class="bg-yellow-600 text-white bg-opacity-95 shadow px-5 py-3 items-center font-bold text-xs rounded">${items.id}</span>
                    <img class="mx-auto" src="${items.sprites.back_default}">
                </div>
                    ` 
            }).join("");

            $('#app').innerHTML = res;
            $('#reload').onclick = () => {
                window.location.reload();
            }
        }
    }
}
export default lab02