function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))


function add7(number) { 
    return number+7
}

console.log(add7(5))

function multiply(number1, number2) {
    return number1 * number2
}

console.log(multiply(5, 6))

function capitalize(str) {
    if (!str) {
        return '';
    }
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello"));

function lastLetter(str) {
    if (!str) {
        return ''; 
    }
    return str.charAt(str.length - 1)
}

console.log(lastLetter("Hello"))