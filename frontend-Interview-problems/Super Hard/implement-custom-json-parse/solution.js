/**
 * Implement Custom JSON.parse
 * 
 * @param {string} jsonString - The JSON string to parse
 * @return {*} - The corresponding JavaScript value
 */
function customParse(jsonString) {
    let index = 0;
    let char = jsonString[index];

    function next() {
        char = jsonString[++index];
    }

    function parseValue() {
        if (char === '"') return parseString();
        if (char === '{') return parseObject();
        if (char === '[') return parseArray();
        if (char === 't' || char === 'f') return parseBoolean();
        if (char === 'n') return parseNull();
        if (char === '-' || isDigit(char)) return parseNumber();
        throw new SyntaxError('Unexpected token');
    }

    function parseString() {
        let result = '';
        next(); // skip opening quote
        while (char !== '"') {
            result += char;
            next();
        }
        next(); // skip closing quote
        return result;
    }

    function parseObject() {
        const result = {};
        next(); // skip opening brace
        while (char !== '}') {
            const key = parseString();
            next(); // skip colon
            const value = parseValue();
            result[key] = value;
            if (char === ',') next(); // skip comma
        }
        next(); // skip closing brace
        return result;
    }

    function parseArray() {
        const result = [];
        next(); // skip opening bracket
        while (char !== ']') {
            result.push(parseValue());
            if (char === ',') next(); // skip comma
        }
        next(); // skip closing bracket
        return result;
    }

    function parseBoolean() {
        const value = char === 't' ? true : false;
        next(); // skip 't' or 'f'
        next(); // skip 'r' or 'a'
        next(); // skip 'u' or 'l'
        next(); // skip 'e' or 's'
        next(); // skip 'e'
        return value;
    }

    function parseNull() {
        next(); // skip 'n'
        next(); // skip 'u'
        next(); // skip 'l'
        next(); // skip 'l'
        return null;
    }

    function parseNumber() {
        let result = '';
        if (char === '-') {
            result += char;
            next();
        }
        while (isDigit(char)) {
            result += char;
            next();
        }
        if (char === '.') {
            result += char;
            next();
            while (isDigit(char)) {
                result += char;
                next();
            }
        }
        if (char === 'e' || char === 'E') {
            result += char;
            next();
            if (char === '-' || char === '+') {
                result += char;
                next();
            }
            while (isDigit(char)) {
                result += char;
                next();
            }
        }
        return parseFloat(result);
    }

    function isDigit(char) {
        return char >= '0' && char <= '9';
    }

    return parseValue();
}

// Example usage
console.log(customParse('{"a":1,"b":"test","c":true}'));
// Output: { a: 1, b: 'test', c: true }

console.log(customParse('[1,"test",true]'));
// Output: [1, 'test', true]

/**
 * Explanation:
 * 
 * The `customParse` function mimics the behavior of `JSON.parse`.
 * It uses a recursive descent parser to parse the JSON string and convert it to the corresponding JavaScript value.
 * The parser handles different types of values (null, number, boolean, string, array, object) and converts them correctly.
 */