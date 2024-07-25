/**
 * Throttling Promises by Batching
 * 
 * @param {Array<Function>} promiseFactories - An array of functions that return promises
 * @param {number} batchSize - The number of promises to execute in each batch
 * @return {Promise} - A promise that resolves when all batches have been processed
 */
function batchPromises(promiseFactories, batchSize) {
    const results = [];
    let index = 0;

    function processBatch() {
        const batch = promiseFactories.slice(index, index + batchSize);
        index += batchSize;
        return Promise.all(batch.map(promiseFactory => promiseFactory())).then(batchResults => {
            results.push(...batchResults);
            if (index < promiseFactories.length) {
                return processBatch();
            } else {
                return results;
            }
        });
    }

    return processBatch();
}

// Example usage
const promiseFactory = (value) => () => new Promise(resolve => setTimeout(() => resolve(value), 1000));

const promises = [promiseFactory(1), promiseFactory(2), promiseFactory(3), promiseFactory(4)];
const batchSize = 2;

batchPromises(promises, batchSize).then(results => {
  console.log(results); // Output: [1, 2, 3, 4]
});

/**
 * Explanation:
 * 
 * The `batchPromises` function processes an array of promise-returning functions in batches.
 * It slices the array into batches of the specified size and processes each batch sequentially using `Promise.all`.
 * The results of each batch are collected in the `results` array.
 * The function returns a promise that resolves when all batches have been processed.
 */