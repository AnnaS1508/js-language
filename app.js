class Person {
    #id;
    #name;
    constructor(id, name){
        this.#id=id;
        this.#name=name;
    }
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name
    }
    toString(){
        return `id: ${this.#id}; name:${this.#name}`
    }
}
const person =new Person(123, 'Moshe');
console.log(`person is ${person}`)

class Employee extends Person{
    #salary;
    constructor(id,name,salary){
super(id,name); 
this.#salary = salary;
    }
    computeSalary(){
        return this.#salary
    }
  toString(){
      return super.toString() + ` salary: ${this.#salary} `
  }         
}
const person2 = new Employee(124,"Sara", 5000);
console.log (`person2 is ${person2}`)
console.log(typeof(person2)) //just object
console.log (person2.constructor.name)
class Child extends Person{
    #kindergarden
    constructor(id,name, kindergarden){
        super(id,name)
        this.kindergarden= kindergarden
    }
    getkindergarden(){
        return this.kindergarden;
    }
    toString(){
        return super.toString() + ` kinderGarten name is ${this.#kinderGarten}`
    }
}
const person3 = new Child(125,'Yakob','Shalom');
console.log(`person3 is ${person3}`)

class WageEmployee extends Employee{
    #hours
    #wage
    constructor(id,name,salary,hours,wage){
        super(id,name,salary)
        this.#hours =hours;
        this.#wage=wage;
    }
    computeSalary(){
        return super.computeSalary() + this.#hours *this.#wage
    }
}

const person4 =new WageEmployee(126,'Asaf',1000,10,100);
console.log('person4 is ${person4}')

//HW17//

const person = [
    new Child(100,'Olya','Shalom'),
    new Child(101,'Serega','Boker'),
    new Child(102,'kolya','Shalom'),
    new Employee(103,'Vasya',1000),
    new WageEmployee(104,'Tolya',1000,10,100)
]

function countOfPersonType (person,type){
return resarray=persons.filter(el=> el.constructor.name ===type).length
}

const cOPT=countOfPersonType(persons,'Child');
console.log(cOPT)

function computeSalaryBudget(persons){
    //return persons.reduce((res,cur) => res+=cur.computeSalary ? cur.computeSalary(): 0,0);
const allchildren=person.filter(p=> !! p.computeSalary);
const salaryValues =allEmloyee.map( p=>p.computeSalary());
return salaryValues.reduce ((res,cur)=>res+cur)

}
//const cSB=computeSalaryBudget(persons);
//console.log(cSB);

function countChildrenGarden(persons,kindergarden){
    return persons.filter(el=> el.getkindergarden && el.getkindergarden()===kindergarden).length

}

const cCG=countChildrenGarden(persons,'Shalom');
console.log(cCG);

function testOutput(fun,expected){
    console.log(`function $(fun.name} ; expected result: ${expected} ;actual result: ${fun()}`)
}

//testOutput(WageEmployee. prototype. computeSalary.bind(person4),2000)

//testOutput(computeSalaryBudget.bind(undefined,persons),3000)
testOutput(ccounOfPersonType.bind(undefined,persons,`Child`),3)
