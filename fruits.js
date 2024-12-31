// Array of fruits with corresponding image URLs
const fruits = [
  { name: "Apple", image: "apple.jpg" },
  { name: "Banana", image: "banana.jpg" },
  { name: "Cherry", image: "cherry.jpg" },
  { name: "Orange", image: "orange.jpg" },
  { name: "Grapes", image: "grape.jpg" },
];

const fruitList = document.getElementById("fruit-list");

for (const fruit of fruits) {
  const listItem = document.createElement("li");

  const fruitImage = document.createElement("img");
  fruitImage.src = fruit.image;
  fruitImage.alt = fruit.name;

  const fruitName = document.createElement("p");
  fruitName.textContent = fruit.name;

  listItem.appendChild(fruitImage);
  listItem.appendChild(fruitName);
  fruitList.appendChild(listItem);
}

// Q2
function numberArray(array, digit) {
  const index = array.indexOf(digit);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
const valueFind = 1008;
const result = numberArray(array, valueFind);
console.log(`We need to find: ${valueFind}`);
console.log(`The Index of the Number is: ${result}`);
