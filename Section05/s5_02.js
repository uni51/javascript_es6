// function Car(model) {
//   this.model = model;
// }

// var cars = [new Car("プリウス"), new Car("ノート"), new Car("アクア")];

// matchCar = cars.find(function (car) {
//   return car.model === "アクア";
// });

// console.log(matchCar);

var posts = [
  { id: 1, title: "古い投稿" },
  { id: 2, title: "新しい投稿" },
];

var comment = { postId: 2, content: "イイネ" };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

matchPost = postForComment(posts, comment);

console.log(matchPost);
