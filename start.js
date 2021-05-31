///1
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 5));

///2
function capital(a) {
    return a.toUpperCase();
}
console.log(capital("hello world"));

///3
const array1 = ["item1", "item2", "item3"];

function lastElement(a) {
    return a[a.length - 1];
}
console.log(lastElement(array1));

///4
const firstElement = (a) => a[0];
console.log(firstElement(array1));
///5
const lastThreeChar = (a) => a.substring(a.length - 3);
console.log(lastThreeChar("Oye Chico Loco"));
/// 6
const typeOfItem = (a) => typeof a[0];
console.log(typeOfItem(array1));
/// 7

const allTypes = (a) => {
    for (const i of a) {
        if (typeof i === typeof i) { return true }

    }
}

console.log(allTypes(array1));

///8

// const sum = sum();
// console.log(typeof sum);

///9
console.log(typeof firstElement);

///10
const functionGenerator = (min, max) => {
    function randomNumber() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomNumber();
}
console.log(functionGenerator(5, 86))

///11
// side effects are alterations that happen outside of a functions scope while calling said function, other then the functions own return.

// a function that produces no side effects and that given the same input will always have the same output.

///12
// methods are associated to objects and functions are Not