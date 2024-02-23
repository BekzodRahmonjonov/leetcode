var map = function(arr, fn) {
  let start = 0
  let end = arr.length - 1;

  while(start <= end) {
    if(start === end) {
      arr[end] = fn(arr[end], end)
      return arr
    }
    arr[start] = fn(arr[start], start)
    arr[end] = fn(arr[end], end)
    start++
    end--
  }
  return arr
};