const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}\n`);

items.forEach(item => {
  const title = item.firstElementChild;
  const elements = item.lastElementChild.children;

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}\n`);
});
