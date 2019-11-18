// InsertionSort(int[] arr)
  
// FOR i = 1 to arr.length

//   int j <-- i - 1
//   int temp <-- arr[i]
  
//   WHILE j >= 0 AND temp < arr[j]
//     arr[j + 1] <-- arr[j]
//     j <-- j - 1
    
//   arr[j + 1] <-- temp

const insertionSort = (arr) => {
  for(let i = 0; i< arr.length; i++) {
    let j = i-1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }
  return arr;
};

// Pass #1
// - In interation number one, we are on are number 8 in the array. We assign out j and temp values (j = -1 , temp = 8). We do not enter the while loop because the while conditions do not yet apply. We then make our arr[j+1] equal to the temp value (temp = 8). Nothing is moved in the array at this point because we do not yet have anything to compare the number 8 to.
// Visual --> [8,4,23,42,16,15] Nothing is change.

// Pass #2
// - In interation number two, we are on number 4 in the array. On this iteration, we will reassign our j and temp values (j = 0, temp = 4). Here we enter the while loop because the while conditionals are met (j >= 0 && 1 < 4). Inside the while loop, we move the number one to be in its correct position. We then decrement j. Outside of the while loop, we make our arr[j+1] to equal the temp value (temp = 4).
// Visual --> [4,8,23,42,16,15] Index 0 and 1 are switched.

// Pass #3
// - In interation number three, we are on number 23 in the array. On this interation, we will reassign our j and temp vaues (j = 1, temp = 23). We do not enter the while loop because the while condtions do not apply (1 is >= 0 && 23 < 8 --> the second condition is not met). We then make our arr[j+1] equal to the temp value (temp = 23). Nothing is moved in the array, because the first two numbers are less than 23.
// Visual --> [4,8,23,42,16,15] Nothing is change.

// Pass #4
// - In interation number four, we are on number 42 in the array. On this interation, we will reassign our j and temp vaues (j = 2, temp = 42). We do not enter the while loop because the while condtions do not apply (2 is >= 0 && 42 <23 --> the second condition is not met). We then make our arr[j+1] equal to the temp value (temp = 42). Nothing is moved in the array, because the first three numbers are less than 42.
// Visual --> [4,8,23,42,16,15] Nothing is change.

// Pass #5
// - In interation number five, we are on number 16 in the array. On this iteration, we will reassign our j and temp values (j = 3, temp = 16). Here we enter the while loop because the while conditionals are met (3 >= 0 && 16 < 42). Inside the while loop, we move the number one until it is in its correct position. We then decrement j. Outside of the while loop, we make our arr[j+1] to equal the temp value (temp = 16).
// Visual --> [4,8,16,23,42,15] Index 5 is moved to be index 3.

// Pass #6
// - In interation number six, we are on number 15 in the array. On this iteration, we will reassign our j and temp values (j = 4, temp = 15). Here we enter the while loop because the while conditionals are met (4 >= 0 && 15 < 42). Inside the while loop, we move the number one until it is in its correct position. We then decrement j. Outside of the while loop, we make our arr[j+1] to equal the temp value (temp = 15).
// Visual --> [4,8,15,16,23,42] Index six is moved to be index three.



module.exports = insertionSort;




















