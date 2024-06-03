// add whatever parameters you deem necessary
function averagePair(arr, ave) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === ave * 2) {
      return [i, j];
    } else if (arr[i] + arr[j] > ave * 2) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}
