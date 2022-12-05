// (() => {
//     let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);



// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);



// let acme = 0;
// if (acme = 1){
//     console.log(acme);
// }

// console.log(acme);



// "use strict";
// delete Object.prototype;



// let i = 3;

// while (i) {
//     console.log( i-- );
// }



// function chekAge(data) {
//     if (data === {age: 18}) {
//         console.log("Ты взрослый");
//     }else if (data == {age: 18}) {
//         console.log("Ты всё ещё взрослый");
//     } else {
//         console.log(`Хмм... Кажется, у тебя нет возраста`);
//     }
// }

// chekAge({ age: 18});



// console.log(true + false + true - false);



// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
//     }

//     constructor({ newColor = "green" } = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// freddie.colorChange("orange");

// function getAge(...args) {
//     console.log(typeof args);
// }

// getAge(21);


// function getAge() {
//     "use strict";
//     age = 21;
//     console.log(age);
// }

// getAge();

let cars = ["BMW","Volvo","Saab","Ford"];

let i = 0;
let text = "";


while (cars[i]){
    text += cars[i];
    console.log(cars[i]);
    i++;
}
