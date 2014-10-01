var friends = ["Ryan", "Tif", "Sufi", "David"];

for (i=0;i<friends.length;i++) {
  if (i === 0) {
    console.log("Hello, " + friends[i] + "!");
  }
  else {
    console.log(friends[i-1] + " says Hello, " + friends[i] + "!");
  }
}