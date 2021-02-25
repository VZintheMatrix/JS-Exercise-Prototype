/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age,) {
   this.name = name;
   this.age = age;
   this.stomach = [];
    
  }
  const marley = new Person('Marley', '30');

  console.log(marley);
 
  Person.prototype.eat = function(food){
    if(this.stomach.length < 10){
    return this.stomach.push(food)
    }
    else {return (`${this.name} is full, need to poop`)

    }
  }
  Person.prototype.poop = function(){
    return this.stomach = []

  }

  Person.prototype.toString = function(){
    return (`wassssupppp, my name is ${this.name} and I am ${this.age} years old.holla`)
  }

  marley.eat('grapes')
  console.log(marley.stomach)
   console.log(marley.toString())
   console.log(marley.poop())
   console.log(marley.stomach)
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
   this.model = model;
   this.milesPerGallon = milesPerGallon;
   this.tank = 0;
   this.odometer = 0;
  }

  Car.prototype.fill = function(gallons){
      return this.tank += gallons;

  }

  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age)
   this.favoriteToy = favoriteToy;

  }

  Baby.prototype = Object.create(Person.prototype)

  Baby.prototype.play = function(){
    return `${this.name} is playing with ${this.favoriteToy}`
  }
 const jetLi = new Baby('jetli', .6, 'nun-chucks');


 console.log(jetLi.play())

  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. if this- is called in a function using the new- keyword then the this- inside that function becomes a new object. only calls that value as a new object from the function.

    2. if apply/call/or bind is used this- becomes the value of the objects that were passed in that function


    3. if dot notation is used to perform the fuction, this- becomes the value of what is left of the dot.

    4. if this is declared outside of a function, it becomes part of the global scope or window, and will return an error or undefined if done in 'use strict mode'. we need context to use this-
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}