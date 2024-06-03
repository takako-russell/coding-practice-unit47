// add whatever parameters you deem necessary
function constructNote(str1, str2) {
  if (str1.length > str2.length) return false;

  let hash = {};
  for (let i = 0; i < str2.length; i++) {
    const letter2 = str2[i];
    hash[letter2] = hash[letter2] + 1 || 1;
  }

  for (let j = 0; j < str1.length; j++) {
    const letter1 = str1[j];
    if (!hash[letter1]) return false;

    hash[letter1]--;
  }
  return true;
}
