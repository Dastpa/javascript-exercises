const findTheOldest = (people) => {
    people.forEach(person => {
        if (person.yearOfDeath === undefined) {person.yearOfDeath = 2022}
    })
    const ordered = people.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
