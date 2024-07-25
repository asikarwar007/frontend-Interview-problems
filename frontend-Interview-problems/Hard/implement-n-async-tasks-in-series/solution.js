/**
 * Implement 'N' async tasks in Series
 * 
 * @param {Array<Function>} tasks - An array of async tasks (functions that return a promise)
 * @return {Promise} - A promise that resolves when all tasks are completed
 */
function seriesTasks(tasks) {
    const results = [];
    let current = Promise.resolve();

    tasks.forEach(task => {
        current = current.then(task).then(result => {
            results.push(result);
        });
    });

    return current.then(() => results);
}

// Example usage
const task = (value) => () => new Promise(resolve => setTimeout(() => resolve(value), 1000));

const tasks = [task(1), task(2), task(3), task(4)];

seriesTasks(tasks).then(results => {
  console.log(results); // Output: [1, 2, 3, 4]
});

/**
 * Explanation:
 * 
 * The `seriesTasks` function runs an array of async tasks in series, one after the other.
 * It maintains a promise chain and collects the results of each task in the `results` array.
 * The function returns a promise that resolves when all tasks are completed, with the results in the same order as the input tasks.
 */