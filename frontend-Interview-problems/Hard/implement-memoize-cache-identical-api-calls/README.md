# Implement Memoize/Cache identical API calls

## Problem Statement
Write a function `memoizeAPI` that takes an async function `apiCall` and returns a new function that caches the results of identical API calls. If the new function is called with the same arguments as a previous call, it returns the cached result instead of making another API call.

## Example
```javascript
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
```

## Constraints
  - Do not use any third-party libraries.

## Notes
The `memoizeAPI` function should handle caching the results of identical API calls and return the cached result if the same arguments are passed again.