
function mergeSort(arr){
  let n = arr.length;

  if(n > 1){
    let mid = Math.floor(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    return merge(left, right, arr);
  } else {
    return [];
  }
}

function merge(left, right, arr){
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i+1;
    } else {
      arr[k] = right[j];
      j = j+1;
    }
    
    k = k+1;
  }

  if(i === left.length){
    while(j < right.length){
      arr[k] = right[j];
      k++;
      j++;
    }
  } else if(j === right.length) {
    while(i < left.length){
      arr[k] = left[i];
      k++;
      i++;
    } 
  }
  return arr;
}

// let testArr = [8,4,23,42,16,15];
// console.log(mergeSort(testArr));

module.exports = mergeSort;

// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
           
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0
//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1

//         k <-- k + 1

//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left

// Sample Arrays
// In your blog article, visually show the output of processing this input array:

// [8,4,23,42,16,15]




