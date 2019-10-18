

function binarySearch(arr, num) {
  let result = -1;
  for (let i = 0; i<arr.length; i++){
    if (arr[i] === num) {
      result = i;
      break;
    }
  }
  return result;
}

module.exports = {binarySearch};