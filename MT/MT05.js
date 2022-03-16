function getBudgets(arr) {
	var sum = 0;	
	for (var i = 0; i < arr.length; i++)
		{
			sum += arr[i].budget;
		}	
	return sum;
}
console.log("Budgets :"+getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }]));
console.log("Budgets :"+getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }])); 