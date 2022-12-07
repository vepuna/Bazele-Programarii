const cmmmc = (arr) => {
  var n = arr.length,
      a = Math.abs(arr[0]);
  for (var i = 1; i < n; i++) {
      var b = Math.abs(arr[i]),
          c = a;
      while (a && b) {
          a > b ? a %= b : b %= a;
      }
      a = Math.abs(c * arr[i]) / (a + b);
  }
  return a;
}

console.log(cmmmc([1, 2 ,3 ,4]));