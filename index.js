currentDate = new Date();
currentYear = currentDate.getFullYear();
queryBirthYear = +prompt('Write your year of birth!');
fromWhichCity = prompt('Your from which city?');
favoriteSport = prompt('Write what sport you like. Football, Basketball, Boxing.');

age = null;
city = null;
sport = null;

if (!queryBirthYear) {
    age = 'It is a pity that you did not want to enter your year of birth.';
} else {
    age = `You are ${currentYear - queryBirthYear} years old`;
}

if (!fromWhichCity) {
    city = 'It is a pity that you did not want to enter the name of the city in which you live.';
} else if (fromWhichCity.toLowerCase().indexOf('Kyiv'.toLowerCase()) !== -1) {
    city = 'You live in the capital of Ukraine';
} else if (fromWhichCity.toLowerCase().indexOf('Washington'.toLowerCase()) !== -1) {
    city = 'You live in the capital of USA';
} else if (fromWhichCity.toLowerCase().indexOf('London'.toLowerCase()) !== -1) {
    city = 'You live in the capital of Great Britain';
} else {
    city = `Do you live in a town ${fromWhichCity}`;
}

if (!favoriteSport) {
    sport = 'It is a pity that you did not want to play the sport that you like.';
} else if (favoriteSport.toLowerCase().indexOf('Footbal'.toLowerCase()) !== -1) {
    sport = 'Cool!!! Do you want to be like Cristiano Ronaldo?';
} else if (favoriteSport.toLowerCase().indexOf('Basketball'.toLowerCase()) !== -1) {
    sport = 'Cool!!! Do you want to be like Michael Jordan?';
} else if (favoriteSport.toLowerCase().indexOf('Boxing'.toLowerCase()) !== -1) {
    sport = 'Cool!!! Do you want to be like Mike Tyson?';
} else {
    sport = ` ${favoriteSport}? Also a good sport.`;
}

alert(`${age} 
${city}
${sport}`);