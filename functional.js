let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return "https://example.com/"+string.toLowerCase().split(/\s+/).join('-');
}

// Imperative version

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
 console.log(imperativeUrls(states));

//functional version

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
};
console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return elements;
}

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length ===1);
}
console.log(functionalSingles(states));

function dakota1(elements) {
  let dakota = [];
  elements.forEach(function(element) {
    if (element.includes('Dakota')){
      dakota.push(element);
    }
  });
  return dakota;
};
console.log(dakota1(states))

function dakota2(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

console.log(dakota2(states));

function dakota3(elements) {
  return elements.filter(element => element.split(/\W/).length ===2);
}

console.log(dakota3(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum: imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function (n) {
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

// sum: functional version
function functionalSum(elements) {
  return elements.reduce((total,n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function (element) {
    lengths[element] = element.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));

// lengths: functional version
function functionalLengths(elements) {
  return elements.reduce((lengths,element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}

console.log(functionalLengths(states));
