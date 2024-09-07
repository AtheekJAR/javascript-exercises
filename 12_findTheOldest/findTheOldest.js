const findTheOldest = function(arr) {
    sortedArr = arr.sort(function(personA, personB){
        const A_age = (personA.yearOfDeath || new Date().getFullYear()) - personA.yearOfBirth;
		const B_age = (personB.yearOfDeath || new Date().getFullYear()) - personB.yearOfBirth;
        return B_age - A_age;

    })
    return sortedArr[0];
};


// Do not edit below this line
module.exports = findTheOldest;
