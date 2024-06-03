// add whatever parameters you deem necessary
function sameFrequency(nums1, nums2) {
  if (nums1.length !== nums2.length) return false;

  const hash = {};
  for (let i = 0; i < nums2.length; i++) {
    const num2 = nums2[i];
    hash[num2] = hash[num2] + 1 || 1;
  }

  for (let j = 0; j < nums1.length; j++) {
    const num1 = nums1[j];
    if (num1 in hash) {
      hash[num1]--;
    } else {
      return false;
    }
    return true;
  }
}
