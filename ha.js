function getRandomName (catsArr) {
    return namesArr[Math.floor(Math.random() * namesArr.length)];
}

module.exports = {
    getRandomName: getRandomName,
};