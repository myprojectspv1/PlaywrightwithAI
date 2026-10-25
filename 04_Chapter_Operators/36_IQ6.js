let Temp =50;
let weather = Temp >= 40 ? "It is too hot outside"
: Temp >= 30 ? "Weather is hot outside"
: Temp >= 20 ? "Weather is normal outside"
: Temp >= 10 ? "Weather is cool outside"
: "OMG! Weather is so cool outside"; 

console.log(`Temperature is ${Temp} and ${weather}`);