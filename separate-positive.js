// add whatever parameters you deem necessary
function separatePositive(arr) {
  let right = 0;
  let left = arr.length - 1;

  while (right < left) {
    while (arr[left] > 0) {
      left--;
    }

    while (arr[right] < 0) {
      right++;
    }

    [arr[right], arr[left]] = [arr[left], arr[right]];
  }

  return arr;
}
