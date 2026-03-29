const lunches = [];

function addLunchToEnd(lunches, lunchItem) {
  lunches.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, lunchItem) {
  lunches.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`)
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length > 0) {
    let lunchItem = lunches.pop();
    console.log(`${lunchItem} removed from the end of the lunch menu.`);
  }
  else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length > 0) {
    let lunchItem = lunches.shift();
    console.log(`${lunchItem} removed from the start of the lunch menu.`);
  }
  else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length > 0) {
    let lunchItem = lunches[Math.floor(Math.random() * lunches.length)];
    console.log(`Randomly selected lunch: ${lunchItem}`);
  }
  else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  }
  else {
    let lunchItemsList = lunches.join(", ");
    console.log(`Menu items: ${lunchItemsList}`);
  }
}
