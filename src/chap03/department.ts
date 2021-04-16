class Department {
    public name: String ;
    private employees: String[] = [];
    constructor(n: String) {
        this.name = n;
    }
    describe(this : Department) {
        console.log(`Department : ${this.name}`);
    }
    addEmploy(employ: String) {
        this.employees.push(employ);
    }
    printEmploy() {
        console.log(this.employees);
    }

}
export default Department