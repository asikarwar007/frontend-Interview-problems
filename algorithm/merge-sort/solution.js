/**
 * Merge Sort
 * 
 * @param {Array<number>} arr - The array to sort
 * @return {Array<number>} - The sorted array
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr)); // [2, 3, 4, 5, 8]

/**
 * Explanation:
 * 
 * The `mergeSort` function recursively sorts an array using the merge sort algorithm.
 * - If the array has one or zero elements, it is already sorted.
 * - The array is divided into two halves, which are sorted recursively.
 * - The `merge` function merges the two sorted halves into a single sorted array.
 * The `merge` function compares elements from both halves and adds the smaller element to the result array.
 * This process continues until all elements from both halves are added to the result array.
 */
