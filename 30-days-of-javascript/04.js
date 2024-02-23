var createCounter = function(init) {
  let result = init
  
  return {
    increment() {
      return ++result
    },
    decrement() {
      return --result
    },
    reset() {
      result = init
      return result
    }
  }
};