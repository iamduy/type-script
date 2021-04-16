abstract class department {
    static fiscalYear= 2020;
    protected employees: string[] = [];
    constructor(protected readonly id: string , public name :string) {}

    static createEmployee(name : string){
        return {name : name};
    }

    abstract describe(this:department) : void;

    addEmployee(employee : string){
        this.employees.push(employee);
    }
    show(){
        console.log('Length :' , this.employees.length);
        console.log('Employees :' , this.employees);
    }
}

class IT extends department {
    admins: string[];
    constructor(id: string,admins:string[]){
        super(id,'IT');
        this.admins = admins;
    }

    describe(){
        console.log(`IT  - ID:  ${this.id} vs ${this.admins}`);
    }
}

const employ1 = department.createEmployee('Max');
console.log(employ1,department.fiscalYear);

const it = new IT('D1' , ['Max']);

it.addEmployee('Max');
it.addEmployee('Menu');
it.show();
export default IT