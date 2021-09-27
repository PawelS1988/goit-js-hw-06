const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

for (let i = 0; i < items.length; i++) {
  const itemTitle = items[i].querySelectorAll("h2");
  const itemList = items[i].querySelectorAll("ul li");
  console.log("Category: ", itemTitle[0].innerText);
  console.log("Elements: ", itemList.length);
}
