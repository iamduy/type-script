
class chap02 {
    bai01() {
        //number string boolean 
        let number1: number = 10;
        let number2: number = 20;
        let phrase: string = "Result is : "
        let boolean: boolean = true

        const res = number2 + number1;
        if (boolean) {
            console.log(`${phrase} ${res}`)
        } else {
            console.log('Not show Result');
        }

        //type inference
        

       
    }

    // bai04(){
    //     enum Role {ADMIN , READ_ONLY , AUTHOR};

    //     interface pers {
    //         name : String,
    //         age : Number,
    //         hobbies : String[],
    //         role : Number,
    //         roleuple : [2,'author']
    //     } 
    //     const person : pers = {
    //         name : 'Typescript',
    //         age : 20,
    //         hobbies : ['Sport' , 'Cooking'],
    //         role : Role.ADMIN , //why error ?
    //         roleuple : [2,'author']
    //     }

    //     let favActivities : any[];
    //     favActivities = [5, 'Sport' , true];
    //     if(person.role === Role.AUTHOR){
    //         console.log('is author');
    //     }

    //     person.roleuple.push("author");
    //     person.roleuple[1] = 10;
    //     person.roleuple = [0,'admin' , 'user'];
    // }

    async bai05() {

        const $ = document.querySelector.bind(document);

        interface pokemon {
            id: Number;
            name: String;
            image: String;
        }

        const quantity: number = 10
        const pok: pokemon[] = [];

        for (let i = 1; i <= quantity; i++) {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const {myArr} = await data.json();
            console.log(myArr);

            pok.push(myArr.sprites.back_default);

            
            const _ = require("lodash");
            const shuffle_pok = _.shuffle(pok);


            const res = shuffle_pok.map((items) => {
                return /* html */`
                <div class="border-gray-900 border p-5 rounded-lg">
                    <img class="mx-auto" src="${items}">
                </div>
                    `
            }).join("");


            console.log(res);
            $('#app').innerHTML = res;
            $('#reload').onclick = () => {
                window.location.reload();
            }

            
        }
    }
}
export default chap02;


