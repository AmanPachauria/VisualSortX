export function getQuickSortAnimations(array) {

  // //Setting Time complexities
  // document.getElementById("Time_Worst").innerText = "O(N log N)";
  // document.getElementById("Time_Average").innerText = "Θ(N log N)";
  // document.getElementById("Time_Best").innerText = "Ω(N log N)";

  // //Setting Space complexity
  // document.getElementById("Space_Worst").innerText = "O(N)";

  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(
  mainArray,
  startIdx,
  endIdx,
  animations,
) {
  if (startIdx >= endIdx) return;
  const pivotIdx = partition(mainArray, startIdx, endIdx, animations);
  quickSortHelper(mainArray, startIdx, pivotIdx - 1, animations);
  quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
  // animations.push([pivotIdx, pivotIdx, 4]);
}


function partition(mainArray, startIdx, endIdx, animations) {
  let i = startIdx + 1;
  let pivot = mainArray[startIdx];

  animations.push([startIdx, startIdx, 3]);

  for (var j = startIdx + 1; j <= endIdx; j++) {

    animations.push([j, j, 3]);


    if (pivot > mainArray[j]) {

      animations.push([j, j, 0]);
      animations.push([i, i, 0]);

      animations.push([i, mainArray[j], 2]);
      animations.push([j, mainArray[i], 2]);

      swap(mainArray, i, j);

      animations.push([i, j, 4]);

      i++;
    }

    animations.push([j, j, 0]);
    animations.push([j, j, 4]);
  }

  animations.push([i - 1, startIdx, 0]);
  animations.push([i - 1, mainArray[startIdx], 2]);
  animations.push([startIdx, mainArray[i - 1], 2]);
  animations.push([startIdx, i - 1, 4]);

  swap(mainArray, startIdx, i - 1);

  for (var allcolor = startIdx; allcolor <= i; allcolor++) {
    if (i >= mainArray.length) continue;
    animations.push([allcolor, allcolor, 1]);
  }

  return i - 1;
}



function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
