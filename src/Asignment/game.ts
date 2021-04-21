import _ from 'lodash'
class game {
    async pokemon() {

        const $ = document.querySelector.bind(document); //selector đến các element

        /* tạo 1 biến tính thời gian game chạy */
        var count = 120; // tính time
        const countdown = setInterval(() => {
            count--;
            if (count >= 0) {
                $('#timeout').innerHTML = count;
            }
            if (count === 0) {
                $('#result').innerHTML = 'Hết thời gian !';
                $('#app').classList.add('hidden');

            }
        }, 1000);


        /* form đăng nhập , ingame */
        const form_login = /* html */`
        <label class="block text-white">
                Ingame <span class="text-red-400 text-sm">*</span>
            <input type="text" id="ingame"
            class="mt-1 p-2 border border-gray-100 block w-full rounded-md bg-gray-800 border-gray-700 text-white">
        </label>
        <button type="submit" class="w-full py-2 px-4 mt-6 text-center bg-white rounded-md text-black text-sm focus:outline-none"> Login </button>
        `
        $('#form').innerHTML = form_login;

        $('#form').addEventListener('submit', (e) => {
            e.preventDefault();
            if ($('#ingame').value === 'pokemon') {
                console.log('login thành công');
                clearInterval(countdown); // clear time
                $('#main').classList.remove('hidden');
                $('#form-login').classList.add('hidden');
                this.pokemon();
            } else {
                $('#ingame').classList.add('border-red-400');
            }
        })


        /* Call api lấy dữ liệu */

        interface types { //định nghĩa kiểu dữ liệu 
            id: number,
            name: string,
            image: string
        }

        const myArr: types[] = []; //tạo biến là 1 mảng các phần tử đã đc định nghĩa kiểu dữ liệu

        for (let i = 1; i <= 12; i++) {

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
            <div class="rounded-lg bg-white check-pokemon relative w-20 h-28">
                 <img data-id='${items.id}' src="${items.image}">
                 <div class="overlay remove bg-cover bg-center"></div>
            </div>
            
        `
        }).join('');

        $('#app').innerHTML = res;

        $('.play').onclick = () => {
            window.location.reload();
        }



        const check_pokemon = document.querySelectorAll('.check-pokemon');
        const remove = document.querySelectorAll('.remove');



        remove.forEach((items) => {
            items.addEventListener('click', () => {
                items.classList.remove('overlay');
            })
        })




        var score = 0; // tính điểm
        check_pokemon.forEach((element) => {
            element.addEventListener('click', () => {

                element.classList.add('choose');
                const choosed = document.querySelectorAll('.choose');

                if (choosed.length === 2) {
                    const firstId = choosed[0].querySelector('img').dataset.id;
                    const secondId = choosed[1].querySelector('img').dataset.id;
                    if (firstId === secondId) {

                        score += 10;

                        $('#score').innerHTML = score;

                        choosed.forEach(item => {
                            setTimeout(() => {
                                item.classList.remove('choose', 'bg-white');
                                item.classList.add('invisible');
                                item.querySelector('img').remove();
                                if (score === 120) {
                                    clearInterval(countdown);
                                    $('#app').classList.add('hidden');
                                    $('#result').innerHTML = '<span>Bạn đã chiến thắng !</span>';
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