var names = ["けん", "はなこ", "そういちろう"];

allNamesLengthCheck = names.every(function (name) {
  return name.length >= 3;
});

console.log(allNamesLengthCheck);

someNamesLengthCheck = names.some(function (name) {
  return name.length >= 3;
});

console.log(someNamesLengthCheck);
