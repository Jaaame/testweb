function simplePair(arr,n){
    let r = 1;
    for (let i of arr){
      if(arr.slice(r).includes(n/i)){
        return[i,parseInt(n/i)];
      }
      r++;
    }
    return null;
  }
console.log("simplePair :"+simplePair([1,2,3],3));
console.log("simplePair :"+simplePair([1,2,3],6));
console.log("simplePair :"+simplePair([1,2,3],9));