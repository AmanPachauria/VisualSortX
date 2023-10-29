export function getBubbleSortAnimations(array) {


  // //Setting Time complexities
  // document.getElementById("Time_Worst").innerText = "O(N log N)";
  // document.getElementById("Time_Average").innerText = "Θ(N log N)";
  // document.getElementById("Time_Best").innerText = "Ω(N log N)";

  // //Setting Space complexity
  // document.getElementById("Space_Worst").innerText = "O(N)";

  const animations = [];
  if (array.length <= 1) return array;
  // const auxiliaryArray = array.slice();
  quickSortHelper(array, animations);
  return animations;
}

function quickSortHelper(
  mainArray,
  animations,
) {

  for (let i = 1; i < mainArray.length; i++) {
    let isSort = true;
    for (let j = 0; j < mainArray.length - i; j++) {
      animations.push([j, j + 1, 0]);
      animations.push([j, j + 1, 1]);

      if (mainArray[j] > mainArray[j + 1]) {
        animations.push([j, mainArray[j + 1], 2]);
        animations.push([j + 1, mainArray[j], 2]);
        swap(mainArray, j, j + 1);
        isSort = false;
      }
    }

    animations.push([mainArray.length - i, mainArray.length - i, 3]);


    if (isSort) break;
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


