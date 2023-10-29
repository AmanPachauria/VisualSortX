export function getMergeSortAnimations(array) {


  //Setting Time complexities
  // document.getElementById("Time_Worst").innerText = "O(N log N)";
  // document.getElementById("Time_Average").innerText = "Θ(N log N)";
  // document.getElementById("Time_Best").innerText = "Ω(N log N)";

  // //Setting Space complexity
  // document.getElementById("Space_Worst").innerText = "O(N)";

  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);

  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  animations.push([middleIdx, middleIdx, 3]);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {

    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j, 0]);

    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j, 1]);

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i], 2]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j], 2]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i, 0]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i, 1]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i], 2]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j, 0]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j, 1]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j], 2]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}










// export function getMergeSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   mergeSortHelper(array, 0, array.length - 1, animations);
//   return animations;
// }

// function mergeSortHelper(
//   mainArray,
//   startIdx,
//   endIdx,
//   animations,
// ) {
//   if (startIdx === endIdx) return;
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
//   animations.push([middleIdx, middleIdx, 3]);
//   mergeSortHelper(mainArray, startIdx, middleIdx, animations);
//   mergeSortHelper(mainArray, middleIdx + 1, endIdx, animations);
//   doMerge(mainArray, startIdx, middleIdx, endIdx, animations);
// }

// function doMerge(
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   animations,
// ) {

//   const auxiliaryArray = [];
//   // let k = 0;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {

//     animations.push([i, j, 0]);

//     if (mainArray[i] <= mainArray[j]) {

//       // animations.push([i, j, 0]);
//       auxiliaryArray.push([mainArray[i++]]);
//       // auxiliaryArray[k++] = mainArray[i++];
//     } else {
//       // animations.push([i, j, 0]);
//       auxiliaryArray.push([mainArray[j++]]);
//       // auxiliaryArray[k++] = mainArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     animations.push([i, j, 0]);
//     auxiliaryArray.push([mainArray[i++]]);
//     // auxiliaryArray[k++] = mainArray[i++];
//   }
//   while (j <= endIdx) {
//     animations.push([i, j, 0]);
//     auxiliaryArray.push([mainArray[j++]]);
//     // auxiliaryArray[k++] = mainArray[j++];
//   }

//   for (var t = 0; t < auxiliaryArray.length; t++) {
//     animations.push([startIdx, auxiliaryArray[t], 2]);
//     mainArray[startIdx++] = auxiliaryArray[t];
//   }
// }