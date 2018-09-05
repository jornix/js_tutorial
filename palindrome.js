// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for palindrome, false otherwise
// function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
//
// }

// Defines a Phrase content
function Phrase(content) {
  this.content = content;
  // Returns true if palindrome, false otherwise
  this.palindrome = function palindrome () {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }
}
