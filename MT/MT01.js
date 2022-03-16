function numberSplint(number) {
    var sum;
    sum = number/2;
    if (number%2 != 0) {
        console.log("numberSplint:("+(sum-0.5)+", "+(sum+0.5)+")");
    }else if (number%2 == 0) {
        console.log("numberSplint:("+sum+", "+sum+")");
    }
}
numberSplint(4);
numberSplint(10);
numberSplint(11);
numberSplint(-9);