const cats_array = [
  {name: "Boba",
  favFood: "sock fluff",
  image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby",
  favFood: "tuna",
  image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Dylan",
  favFood: "cats",
  image: "https://pbs.twimg.com/media/DSZDsHJX4AAgQPr.jpg:large"}
];

var app = function() {

var getSection = function() {
  return document.getElementById('cats');
}

var createCatName = function(name) {
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
}

var createFavFood = function(food) {
  var favFood = document.createElement('li');
  favFood.innerText = food;
  return favFood;
}

var createImage = function(image) {
  var image = new Image(200, 200);
  image.src = cat.image;
  return image;
}

var createUlItem = function() {
  var UlItem = document.createElement('ul');
  return UlItem;
}

var appendElements = function(name, food, image){
  var ul = createUlItem();
  ul.appendChild(name);
  ul.appendChild(food);
  ul.appendChild(image);
  var section = getSection();
  section.appendChild(ul);
}

var addCat = function(name, food) {
  var catName = createCatName(name);
  var favFood = createFavFood(food);
  var image = createImage(image);
  var cats_array = document.querySelector('#cats');
  appendElements(catName, favFood, image);
}

for (var cat of cats_array){
  addCat('My name is ' + cat.name, 'I like eating ' + ' ' + cat.favFood, + '<img src="'+cat.image+'">');
}



};

document.addEventListener("DOMContentLoaded", app);
