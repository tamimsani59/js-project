
function reverseArr(arr, left, right) {
  while (left < right) {
      var temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
  }
  return arr;
}

function rotate(arr, k) {
  var l = arr.length;
  arr = reverseArr(arr, 0, l - 1);
  arr = reverseArr(arr, 0, k - 1);
  arr = reverseArr(arr, k, l - 1);
  console.log(arr);
  return arr;
}

var arr = [1, 2, 3, 4, 5];
rotate(arr, 3);
  