/**
 * Implement Memoize/Cache identical API calls
 * 
 * @param {Function} apiCall - The async function to memoize
 * @return {Function} - A new memoized function
 */
function memoizeAPI(apiCall) {
    const cache = new Map();

    return async function(...args) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            const result = await apiCall(...args);
            cache.set(key, result);
        }
        return cache.get(key);
    };
}

// Example usage
const apiCall = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const memoizedAPICall = memoizeAPI(apiCall);

memoizedAPICall('https://api.example.com/data').then(data => {
  console.log(data); // Output: API response data
});
memoizedAPICall('https://api.example.com/data').then(data => {
  console.log(data); // Output: Cached response data
});

/**
 * Explanation:
 * 
 * The `memoizeAPI` function memoizes an async function to cache the results of identical API calls.
 * It returns a new function that uses a `Map` to store the results with the arguments serialized as keys.
 * If the same arguments are passed again, the cached result is returned instead of making another API call.
 */