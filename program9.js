function zeroesToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
        nonZeroIndex++;
      }
    }
  }
  
  const arr1 = [1, 2, 0, 0, 4, 0, 5];
  zeroesToEnd(arr1);
  console.log(arr1); 
  
  const arr2 = [0, 0, 2, 0, 5];
  zeroesToEnd(arr2);
  console.log(arr2); 
  
  const arr3 = [4, 4, 5];
  zeroesToEnd(arr3);
  console.log(arr3); 
  
  const arr4 = [0, 0];
  zeroesToEnd(arr4);
  console.log(arr4); 
  