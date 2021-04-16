class lab03 {
    bai01() {
        const hobbies = ['sport', 'art'];
        const active = ['cook'];
        const newHobbies = [...hobbies, ...active];
        console.log(newHobbies);
    }
    bai02() {
        //function & void
        const sum = (x: number = 5, y?: number) => {
            return x + <number>y;
        }
        const speech = (output: any): void => {
            console.log('Result : ' + output);
        }
        speech(sum(5, 3));
        speech(sum(5, 5));

        /**never & void**/
        // let something: void = undefined;
        // let nothing: never = null;
        // function throwError(errorMsg: string): never {
        //     throw new Error(errorMsg);
        // }

        //callback & function
        function AddandHandle(x: number, y: number, cb : (num: number) => void) {
            const result = x + y;
            cb(result);
        }
        //truyen tham so x = 10 , y = 20 
        AddandHandle(10, 20, (result) => {
            console.log('Result :', result)
        })
    }
}
export default lab03;