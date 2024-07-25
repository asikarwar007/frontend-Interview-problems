/**
 * Heap Sort
 * 
 * @param {Array<number>} arr - The array to sort
 * @return {Array<number>} - The sorted array
 */
function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
}

function heapify(arr, i, max) {
    let index = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;

    if (leftChild < max && arr[leftChild] > arr[index]) {
        index = leftChild;
    }

    if (rightChild < max && arr[rightChild] > arr[index]) {
        index = rightChild;
    }

    if (index !== i) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        heapify(arr, index, max);
    }
}

// Example usage
const arr = [5, 3, 8, 4, 2];
console.log(heapSort(arr)); // [2, 3, 4, 5, 8]

/**
 * Explanation:
 * 
 * The `heapSort` function sorts an array using the heap sort algorithm.
 * It first builds a max heap from the array. Then, it repeatedly swaps the first element (the largest) with the last unsorted element and reduces the heap size by one.
 * After each swap, it heapifies the reduced heap to maintain the max heap property.
 */