

let usrName = 'Artem';
let age = '30';
let isMarried = false;*/


//======== Методы в обьектах ===============
//Пример 1+++++
const person = {
usrName: 'Artem',
age: 30,
isMarried: false,
users: function() {
    console.log('Привет');
    }
}; 
person.users()
 //2 пример+++++++
person.users = function () {
    console.log('Привет');
}
person.users()


 //пример 3++++

 const person = {
    usrName: 'Artem',
    age: 30,
    isMarried: false,
    users: function(Name) {
        console.log(`Привет, ${Name}`);}
};
person.users('Юрий') 
 //ПРимер 3++++++ ключевое слово this+++++++++
const person = {
    user: 'меня зовут Анна',
    family: 1,
    papa: function(name) {
      console.log(`Привет, ${name}! Как твои дела ${this.user}`); 
    }
};
person.papa('Юрий');

 //=========14.Обьекты обход циклом for in  ===========
 
 const person = {
    user: 'Анна',
    family: 10,
    papa: function (name) {
      console.log(`Привет, ${name}! Меня зовут ${this.user}`); 
    },
};
for(let key in person) {
console.log(key);
}

// так же можно console.log(key, ':' [key]); }







