function pluck(array, property) {
  return array.map(function (obj) {
    return obj[property];
  });
}

var colorObjects = [{ color: "赤" }, { color: "青" }, { color: "黄色" }];

var colorNames = pluck(colorObjects, "color");
