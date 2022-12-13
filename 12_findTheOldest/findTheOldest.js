const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear();

    let oldest = array.sort((a,b) => {
        if(!a.yearOfDeath) {
            a.yearOfDeath = currentYear;
        }
        if(!b.yearOfDeath) {
            b.yearOfDeath = currentYear;
        }
      const lastGuy = a.yearOfDeath - a.yearOfBirth;  
      const nextGuy = b.yearOfDeath - b.yearOfBirth;
      return (lastGuy > nextGuy) ? -1 : 1;
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
