let arr = [6, 3, 9, 5, 2, 8];
let n = arr.length;

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] > pivot) {
            i++;
            // swap
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    i++;
    let temp = arr[i];
    arr[i] = pivot;
    arr[high] = temp;
    return i; //pivot index;
}


function quick(arr, low, high) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quick(arr, low, pivot - 1);
        quick(arr, pivot + 1, high);
    }
}

quick(arr, 0, n - 1);

console.log(arr);