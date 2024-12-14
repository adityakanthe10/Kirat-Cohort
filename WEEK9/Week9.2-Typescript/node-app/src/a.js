// const x:number = 1;
// console.log(x);
function maxValue(users) {
    // let max = 0;
    for (var i = 0; i < users.length; i++) {
        var maxUser = users[0];
        if (users[i].age > maxUser.age) {
            maxUser = users[i];
        }
        return maxUser;
    }
}
console.log(maxValue([
    { firstName: "aditya", lastName: "kanthe", age: 12 },
    { firstName: "Rahul", lastName: "Sharma", age: 34 },
    { firstName: "Priya", lastName: "Gupta", age: 28 },
]));
