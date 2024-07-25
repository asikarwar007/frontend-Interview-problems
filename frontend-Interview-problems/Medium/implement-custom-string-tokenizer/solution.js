/**
 * Implement Custom String Tokenizer
 * 
 * @param {string} str - The string to tokenize
 * @param {string} delimiter - The delimiter to split by
 * @return {Array<string>} - The array of tokens
 */
function tokenizeString(str, delimiter) {
    const tokens = [];
    let currentToken = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            if (currentToken.trim() !== '') {
                tokens.push(currentToken.trim());
            }
            currentToken = '';
        } else {
            currentToken += str[i];
        }
    }
    if (currentToken.trim() !== '') {
        tokens.push(currentToken.trim());
    }
    return tokens;
}

// Example usage
console.log(tokenizeString("hello, world,,  this is , , a test", ","));
// Output: ["hello", "world", "this is", "a test"]

/**
 * Explanation:
 * 
 * The `tokenizeString` function iterates through the input string and builds tokens based on the delimiter.
 * When it encounters the delimiter, it trims and pushes the current token to the array.
 * It handles multiple consecutive delimiters and trims whitespace from each token before adding it to the array.
 * The function returns the array of tokens.
 */