





// const account = {
//     number: '12112165165489987987',
//     amoutn: 100,
//     deposit(quantity) {
//         this.amoutn = this.amoutn + quantity
//         return (this.amoutn)
//     },
//     withdraw(quantity){
//         this.amoutn=this.amoutn - quantity

//     }

// }

// account.deposit(100)
// account.deposit(250)
// account.withdraw(100)
// document.write(account.amoutn+' ' )





///-----------------Metodos javaScript

// const user2 = {
//     name: 'Fernando',
//     lastName: 'Trujillo',
//     age: 30,
//     hobbies: ['read', 'progamming', 'run'],
//     showFullname() {
//         return `${this.name}  ${this.lastName}  ${this.age} ` ;
//     },
//     adress: {
//         street: 'some street',
//         city: 'lodon'
//     }
// }
// const user3 = {
//     name: 'Mario',
//     lastName: 'Mendoza',
//     age: 30,
//     hobbies: ['read', 'progamming', 'run'],
//     showFullname() {
//         return `${this.name}  ${this.lastName}  ${this.age} ` ;
//     },
//     adress: {
//         street: 'some street',
//         city: 'lodon'
//     }
// }
// const user4= {
//     name: 'Elvira',
//     lastName: 'Sastre',
//     age: 30,
//     hobbies: ['read', 'progamming', 'run'],
//     showFullname() {
//         return `${this.name}  ${this.lastName}  ${this.age} ` ;
//     },
//     adress: {
//         street: 'some street',
//         city: 'lodon'
//     }
// }




// const user1 = {
//     name: 'Edgar',
//     lastName: 'Poe',
//     age: 30,
//     hobbies: ['read', 'progamming', 'run'],
//     showFullname() {
//         return `${this.name}  ${this.lastName}  ${this.age} `;
//     },
//     adress: {
//         street: 'some street',
//         city: 'lodon'
//     }
// }

//  // ---- contructor manual
// function Person() {
//     this.name = ""
//     this.lastName = ""
//     this.age = 0
//     this.showFullname = function () {
//         return `${this.name}  ${this.lastName} `
//     }
//     this.adress={
//         street:'',
//         city:'lonodn'
//     }
// }


// const user2 =new Person()
// user2.name='Elvira'
// user2.lastName= 'Sastre'
// user2.age=30
// user2.adress.city='Madrid'
// user2.adress.street='neverland'
// document.write(user2.showFullname())
// console.log(user2)









//constructor  Js


// function Users (name ,lastName){
//     this.name=name
//     this.lastName= lastName 
//     this.diplayName= function(){
// return `${this.name} ${this.lastName}`

//     }   
// }



// const elvira = new Users('Elvira', 'Sastre')
// const gabriel = new Users('Gabriel', 'Garcia')
// const julio = new Users('Julio', 'Cortazar')
// const fernando = new Users('Fernando', 'trujillo')
// const  efraim = new Users('Efraim', 'Medina')




// Users.prototype.greet = function(){
// return `hello i'am ${this.name}`
// }
//  Users.prototype.age=30

//  Users.prototype.adress={
// city:'bogota',
// street:'dorado 13'
//  }
// document.write(elvira.greet())

//  console.log(elvira.age)





// class--------------------------------------------------

// class Escritor {


// constructor(name,lastName){

// this.name=name
// this.lastName=lastName
// }greet(){

//     return `Hola es posible que no  sepas quien soy , mi  nombre es ${this.name} ${this.lastName}`
// }
// }
// const  escritor1=new Escritor('Federico','Anzardi')

// Escritor.prototype.age=30

// document.write(escritor1.greet(), '   escribi "HAY PEORES COSAS QUE ESTAR SOLO"')

//--------Agregacion

// const company={
// name:'Avengers',
// employees:[]
// }
// class Employees {
// constructor(name,lastName){
//     this.name=name
//     this.lastName=lastName
// }
// }

// const ironMan = new Employees('Tony','Startk');
// const spiderMan = new Employees('Petter','Parker');

// company.employees.push(ironMan,spiderMan)

// console.log(company)



//herencia js


class Person {

    constructor(name, lastName,age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}



class Programmer extends Person {
    constructor(name, lastName, language,age) {
        super(name,lastName,age);
        this.language = language;
    }
}

const person = new Person()

const programmer = new Programmer('Billy', 'Gates', 'c++',30)
console.log(person);
console.log(programmer);





///overloading



function countItems(elemet){
    return elemet.toString().length;
}
console.log(countItems(1459));
console.log(countItems('Game Over'));
document.write(countItems('una vez, al filo de una lugubre media noche ,mientras'));


















































