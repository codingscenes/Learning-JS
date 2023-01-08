const users = [
    {
        id: 1,
        name: "Rohit",
        age: 26,
        isActive: true,
        balance: 100
    },
    {
        id: 2,
        name: "Mohit",
        age: 29,
        isActive: true,
        balance: 200
    },
    {
        id: 3,
        name: "Rolly",
        age: 19,
        isActive: true,
        balance: 50
    },
    {
        id: 4,
        name: "Amit",
        age: 32,
        isActive: false,
        balance: 500
    },
    {
        id: 5,
        name: "Yash",
        age: 45,
        isActive: true,
        balance: 1000
    },

];

// 1. get array of names from given users
// 2. get all active users,
// 3. sort users by age in descending order
// 4. display the total balance (sum) of active users

// solutions
//#1 - for, forEach, map
const userNames = users.map(user => user.name);
console.log(userNames);

// #2 
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// #3 (-1 => ascending, 1 => descending, 0 - no change in order)
//                             10      <   20 then put 20, 10
// Note sort method will change the orginal array order.
// so plz comment before trying line no. 64 solution.
users.sort((user1, user2) => user1.age < user2.age ? 1 : -1)
console.log(users)

// grouping the first three solution

// , filter by active, sort in desceding by age, map by name
const resultWithNames = users.
    filter(user => user.isActive)
    .sort((user1, user2) => user1.age < user2.age ? 1 : -1)
    .map(user => user.name);
console.log("Final result is ", resultWithNames)

// sum - accumulation - reduce / reduceRight
const totalBalance = users.reduce((sum, currentUser) => sum + currentUser.balance, 0);

console.log(totalBalance)
//0 + 100 => sum = 100,  100 + 200 => 300 = sum  , 