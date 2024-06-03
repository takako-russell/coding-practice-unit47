// add whatever parameters you deem necessary
function twoArrayObject(keys, nums) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[i] = i < nums.length ? nums[i] : null;
  }

  return obj;
}
