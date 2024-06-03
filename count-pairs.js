// add whatever parameters you deem necessary
function countPairs(arr, target) {
  const nums = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];

    nums[i] = n + 1 || 1;
  }

  for (let j = 0; j < arr.length; j++) {
    const difference = target - arr[i];
    if (difference in nums) {
      result.push(arr[i], difference);
      nums[difference]--;
    }
  }

  return result.length;
}
