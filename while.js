var i = 100;

while (i>=0 ) {
    if (i > 9) {
  console.log(i + " bottles of beer on the wall, " + i  + " bottles of beer. Take one down, pass it around " + (i-1) + " beers on the wall...");
    }else {
        console.log(i + " bottle of beer on the wall, " + i  + " bottle of beer. Take one down, pass it around " + (i-1) + " beer on the wall...");
    }
  i--;
}
