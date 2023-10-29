export function getHeapSortAnimations(array) {

    // //Setting Time complexities
    // document.getElementById("Time_Worst").innerText = "O(N log N)";
    // document.getElementById("Time_Average").innerText = "Θ(N log N)";
    // document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // //Setting Space complexity
    // document.getElementById("Space_Worst").innerText = "O(N)";

    const animations = [];
    if (array.length <= 1) return array;
    HeapSortHelper(array, array.length, animations);
    return animations;
}

function HeapSortHelper(mainarray, n, animations) {

    //  1) max_heapify the array 

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        MaxHeapify(mainarray, n, i, animations);
    }

    for (let i = n - 1; i >= 0; i--) {

        // animations.push([0, i, 0]);
        animations.push([0, mainarray[i], 2]);
        animations.push([i, mainarray[0], 2]);
        animations.push([0, i, 4]);
        swap(mainarray, 0, i);
        animations.push([i, i, 3]);
        MaxHeapify(mainarray, i, 0, animations);
        animations.push([i, i, 1]);
    }
}

function MaxHeapify(mainArray, n, i, animations) {
    let larger = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && mainArray[larger] < mainArray[left]) {
        animations.push([larger, left, 0]);
        larger = left;
    }

    if (right < n && mainArray[larger] < mainArray[right]) {
        if (larger !== i) {
            animations.push([larger, larger, 4]);
        }
        animations.push([i, right, 0]);
        // animations.push([larger, right, 4]);
        larger = right;
    }

    if (larger !== i) {

        animations.push([larger, mainArray[i], 2]);
        animations.push([i, mainArray[larger], 2]);
        animations.push([larger, i, 4]);
        swap(mainArray, larger, i);
        MaxHeapify(mainArray, n, larger, animations);

    }

    // animations.push([larger, i, 3]);
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



