var users = [
  { name: "太郎" },
  { name: "次郎" },
  { name: "三郎" },
  { name: "次郎", id: 10 },
];

var user;

// for (var i = 0; i < users.length; i++) {
//   if (users[i].name == "次郎") {
//     user = users[i];
//     break;
//   }
// }

matchUser = users.find(function (user) {
  return user.name == "次郎";
});

console.log(matchUser);
