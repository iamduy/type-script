
import _ from 'lodash'
class game {
    login() {

        const $ = document.querySelector.bind(document);

        const form_login = `
        <label class="block text-white">
                Ingame <span class="text-red-400 text-sm">*</span>
            <input type="text" id="ingame"
            class="mt-1 p-2 border border-gray-100 block w-full rounded-md bg-gray-800 border-gray-700 text-white">
        </label>
    
        <button type="submit"
        class="w-full py-2 px-4 mt-6 text-center bg-white rounded-md text-black text-sm focus:outline-none"> Login
        </button>
        `
        $('#form').innerHTML = form_login;

        $('#form').addEventListener('submit', (e) => {
            e.preventDefault();
            if ($('#ingame').value === 'hi') {
                console.log('login thành công');

                $('#main').classList.remove('hidden');
                $('#form-login').classList.add('hidden');
                this.pokemon();
            } else {
                $('#ingame').classList.add('border-red-400');
            }
        })


    }
    async pokemon() {

        const $ = document.querySelector.bind(document); //selector đến các element

        //định nghĩa kiểu dữ liệu 
        interface types {
            id: number,
            name: string,
            image: string
        }

        //tạo biến là 1 mảng các phần tử đã đc định nghĩa kiểu dữ liệu
        const myArr: types[] = [];

        //chạy vòng lặp for
        for (let i = 1; i <= 20; i++) {

            //fetch data 
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

            // chuyển data sang dạng json
            const pokemon: any = await data.json();


            //push các thuộc tính vào mảng
            myArr.push(
                {
                    id: i,
                    name: pokemon.name,
                    image: pokemon.sprites.back_default
                },
                {
                    id: i,
                    name: pokemon.name,
                    image: pokemon.sprites.back_default
                });

        }

        // sử dụng shuffle để xáo trộn phần tử
        const shuffle = _.shuffle(myArr);

        const res = shuffle.map((items) => {

            return /* html */`
            <div class="rounded-lg bg-white check-pokemon relative">
                 <img data-id='${items.id}' class="mx-auto block" src="${items.image}">
                 <div class="overlay remove"></div>
            </div>
            
        `
        }).join('');

        $('#app').innerHTML = res;


        var count = 0; // tính time
        var score = 0; // tính điểm

        const countdown = setInterval(() => {
            count++;
            if (count <= 300) {
                $('#timeout').innerHTML = count.toString();
            }
            if (count === 300) {
                $('#result').innerHTML = 'Hết thời gian !';
                $('#app').classList.add('hidden');
                $('.play').classList.remove('hidden');
                $('.play').onclick = () => {
                    window.location.reload();
                }
            }
        }, 1000);



       

        const check_pokemon = document.querySelectorAll('.check-pokemon');
        const remove = document.querySelectorAll('.remove');



        remove.forEach((items) => {
            items.addEventListener('click', () => {
                items.classList.remove('overlay');

            })
        })
        check_pokemon.forEach((element) => {
            element.addEventListener('click', () => {

                element.classList.add('choose');
                const choosed = document.querySelectorAll('.choose');

                if (choosed.length === 2) {
                    const firstId = choosed[0].querySelector('img').dataset.id;
                    const secondId = choosed[1].querySelector('img').dataset.id;


                    if (firstId === secondId) {

                        score += 10;

                        $('#score').innerHTML = score.toString();

                        choosed.forEach(item => {
                            setTimeout(() => {
                                item.classList.remove('choose', 'bg-white');
                                item.classList.add('invisible');
                                item.querySelector('img').remove();
                                if (score === 200) {
                                    clearInterval(countdown);
                                    $('#app').classList.add('hidden');
                                    $('#result').innerHTML = 'Bạn đã chiến thắng !';
                                    $('.play').classList.remove('hidden');
                                    $('.play').onclick = () => {
                                        window.location.reload();
                                    }
                                }
                            }, 500)
                        })

                    } else {

                        remove.forEach(items => {

                            setTimeout(() => {
                                items.classList.add('overlay');
                                choosed.forEach(element => {
                                    element.classList.remove('choose');
                                })
                            }, 500);
                        })

                    }
                }
            })
        });



        
    }

}
export default game;