function highestDigit(n) {
  var a = n.toString();
  var b = a.split('');
  return Math.max.apply(null, b);
}
  console.log("highestDigit(379):"+highestDigit(379));
  console.log("highestDigit(2):"+highestDigit(2));
  console.log("highestDigit(377401):"+highestDigit(377401));