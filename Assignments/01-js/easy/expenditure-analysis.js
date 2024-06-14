/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // 1. Initialize an object to store total spending per category
  let totalSpendInCategory = {};
  // 2. Iterate through each transactions
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // 3. Update total spending for the category
    if (totalSpendInCategory[category]) {
      totalSpendInCategory[category] += price;
    } else {
      totalSpendInCategory[category] = price;
    }
  });
  // 4 . Foramt the result into an array of objects

  let result = [];
  for (let category in totalSpendInCategory) {
    result.push({
      category: category,
      totalSpent: totalSpendInCategory[category],
    });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
