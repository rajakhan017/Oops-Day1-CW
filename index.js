// Custom filter function
function mineFilter(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
   }
   // Custom reduce function
   function mineReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
   }
   // Custom map function (assuming it's named mineMap)
   function mineMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
   }
   // Example usage:
   const numbers = [1, 2, 3, 4, 5];
   const filteredNumbers = mineFilter(numbers, (num) => num > 2);
   console.log(filteredNumbers); // Output: [3, 4, 5]
   const sum = mineReduce(numbers, (acc, num) => acc + num, 0);
   console.log(sum); // Output: 15
   const squaredNumbers = mineMap(numbers, (num) => num * num);
   console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
