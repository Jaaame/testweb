function totalVolume(...box){
    var sum=0;
    for (i=0;i<box.length;i++){
        sum += box[i][0]*box[i][1]*box[i][2];
    }
    return sum;
}
console.log("totalVolume : "+totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log("totalVolume : "+totalVolume([2,2,2],[2,1,1]));
console.log("totalVolume : "+totalVolume([1,1,1]));

