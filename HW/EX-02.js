function equation(str){
    let one=1,two=2,four=4,seven=7,eight=8,night=9,ten=10;
    let result=eval(str);
    return result;
}
let s1 = equation("one+one");
let s2 = equation("seven*four-two");
let s3 = equation("one+one+one+one+one");
console.log("equation(one+one) ==> "+s1);
console.log("equation(seven*four-two) ==> "+s2);
console.log("equation(one+one+one+one+one) ==> "+s3);
