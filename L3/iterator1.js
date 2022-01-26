let str = "hello";

let iterator = str[Symbol.iterator]();

while(true){
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
console.log("\n*********************************************\n")

for (let char of ['Table','Chairs','Couch']){
    console.log(char);
}