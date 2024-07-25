/**
 * Binary Search
 * 
 * @param {Array<number>} arr - The sorted array to search
 * @param {number} target - The target value to find
 * @return {number} - The index of the target value, or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 3)); // 2
console.log(binarySearch(arr, 6)); // -1

/**
 * Explanation:
 * 
 * The `binarySearch` function performs binary search on a sorted array to find the target value.
 * It uses a loop to repeatedly divide the array into halves, comparing the middle element with the target.
 * If the middle element matches the target, its index is returned.
 * If the middle element is less than the target, the search continues in the right half of the array.
 * If the middle element is greater than the target, the search continues in the left half of the array.
 * If the target is not found, the function returns -1.
 */