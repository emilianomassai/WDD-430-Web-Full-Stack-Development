// Primitives: number, strings, boolean
// More complex types: arrays, objects
// Function types, parameters


// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Emiliano";

let isInstructor: boolean;
isInstructor = true;

// More complex types 

let hobbies: string[];
hobbies = ['Sports', 'Cooking']

// object type definition
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Emiliano',
    age: 32
};

// creating type of people combining the person object into array of people 
let people: {
    name: string;
    age: number;
}[];

// Type inference - assigning the type automatically when declaring a variable 
// and initializing it at the same time
let course = 'React - The Complete Guide';

// union types - allows you to assign more than one type to a variable 
let test: string | number;

test = 'Emiliano';
test = 2;

// Type alias to create your own base type
type Dog = {
    breed: string;
    age: number;
};

let dog: Dog;
let dogs: Dog[];

// Functions & types
function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value)
}

// Generics 

// NOT CORRECT 
// function insertAtBeginning(array: any[], value: any) {
// const newArray = [value, ...array]
// return newArray;
// }

// USE THIS INSTEAD
// using this generic type, typescript will be able to recognize what type is 
// used in the array.
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]


// Classes & Interfaces
class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) { }

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Emiliano', 'Massai', 38, ['Angular']);


// Interfaces (only existing in Typescript)
interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let emiliano: Human;
emiliano = {
    firstName: 'Emiliano',
    age: 38,
    greet() {
        console.log('Hello');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!');
    }
}