// Select .characters with document.querySelector
const characters = document.querySelector('.characters');

// Select .humans from .characters
const humans = characters.querySelector('.humans');

// Select all humans with querySelectorAl, straight from .humans
const allHumans = humans.querySelectorAll('li');
console.log(allHumans);
