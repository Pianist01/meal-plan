let getData = localStorage.getItem('personData');

let stringToArray = JSON.parse(getData);

const title = document.createElement('h1');


class person {
    constructor(name, weight, height, age, goal) {
        this.name = name,
        this.weight = weight,
        this.height = height,
        this.age = age,
        this.goal = goal
    };
   }

const user = new person(...stringToArray);

console.log(user);
