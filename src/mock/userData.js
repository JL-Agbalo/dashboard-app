const names = [
    "Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack",
    "Kara", "Leo", "Mona", "Nate", "Olive", "Paul", "Quinn", "Rita", "Sam", "Tina",
    "Uma", "Vince", "Wendy", "Xander", "Yara", "Zane"
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

const userCount = 500;
let uniqueNames = [];
while (uniqueNames.length < userCount) {
    uniqueNames = uniqueNames.concat(shuffle([...names]));
}
uniqueNames = uniqueNames.slice(0, userCount);

const userData = Array.from({ length: userCount }, (_, i) => ({
    id: i + 1,
    name: uniqueNames[i],
    activity: getRandomInt(50, 200),
    score: getRandomInt(60, 100),
    date: getRandomDate(new Date(2024, 4, 1), new Date(2024, 5, 30)),
    squadId: getRandomInt(1, 50)
}));

export default userData;