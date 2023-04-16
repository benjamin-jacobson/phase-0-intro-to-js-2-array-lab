// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function appendCat(name) {
    const copyCats = [...cats, name];
    return copyCats
}

function prependCat(name) {
    const copyCats = [name, ...cats];
    return copyCats
}

function removeFirstCat () {
    return cats.slice(1);
  }
  
  function removeLastCat () {
    return cats.slice(0, cats.length - 1);
  }