// Select .characters with document.querySelector
const characters = document.querySelector('.characters');

// Select .humans from .characters
const humans = characters.querySelector('.humans');

// Select all humans with querySelectorAl, straight from .humans
const allHumans = humans.querySelectorAll('li');
console.log(allHumans);

// The Hobbits

// Select all hobbits with children
const hobbits = document.querySelector('.hobbits');
const hobbitsChildren = hobbits.children;
console.log(hobbitsChildren);

// Select the Merry Hobbit
const merryTheHobbit = hobbits.querySelectorAll('li');
const merry = merryTheHobbit[2];
console.log(merry);

// The Enemies

// Select .enemies from sauron
const sauron = document.querySelector('li');
const enemies = sauron.parentElement;
console.log(enemies);

// Select the .characters div from Nazgûl
const nazgûl = document.querySelectorAll('li')[1];
const enemiesList = nazgûl.parentElement;
const enemiesParent = enemiesList.parentElement;
console.log(enemiesParent);
