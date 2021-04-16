class product<x,y,z>{
    id: x;
    name: y;
    price: z;

    constructor(id : x , name : y , price : z){
        this.id = id,
        this.name = name,
        this.price = price
    }

    showList<T>(list: T[]): T[] {
        return list
    }
    showInfo(): void{
        console.log(`
        id : ${this.id} \t
        name : ${this.name} \t
        price : ${this.price}
        `)
    }
    
}

export default product