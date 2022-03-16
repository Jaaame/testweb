function sumTwoSmallestNums(arr) {
    arr.sort((a,b) => a-b);
    let sum = 0;
    for (let i = 0;i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]+arr[i+1];
            break;
        }
    }
    return sum;
   }
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([19,5,42,2,77]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([2,9,6,-1]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([879,953,694,-847,942,221,-91,-723,791,-587]));
console.log("sumTwoSmallestNums :"+sumTwoSmallestNums([3689,2902,3951,-475,1617,-2385]));
