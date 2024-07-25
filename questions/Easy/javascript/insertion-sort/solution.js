/**
 * Insertion Sort
 * 
 * @param {Array<number>} arr - The array to sort
 * @return {Array<number>} - The sorted array
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
const arr = [5, 3, 8, 4, 2];
console.log(insertionSort(arr)); // [2, 3, 4, 5, 8]

/**
 * Explanation:
 * 
 * The `insertionSort` function sorts an array using the insertion sort algorithm.
 * It iterates over the array and inserts each element into its correct position in the sorted portion of the array.
 * This process is repeated until the entire array is sorted.
 */