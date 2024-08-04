/**
 * Quick Sort
 * 
 * @param {Array<number>} arr - The array to sort
 * @return {Array<number>} - The sorted array
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arr = [5, 3, 8, 4, 2];
console.log(quickSort(arr)); // [2, 3, 4, 5, 8]

/**
 * Explanation:
 * 
 * The `quickSort` function sorts an array using the quick sort algorithm.
 * - If the array has one or zero elements, it is already sorted.
 * - The last element of the array is chosen as the pivot.
 * - All elements less than the pivot are added to the `left` array.
 * - All elements greater than or equal to the pivot are added to the `right` array.
 * - The `left` and `right` arrays are sorted recursively and concatenated with the pivot.
 */