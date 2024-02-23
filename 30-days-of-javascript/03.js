var expect = function(val) {
  let obj = {
    toBe: (value) => {
      if (value === val) {
        return true 
      }
      else { 
        throw "Not Equal" 
      }
    },
    notToBe: (value) => {
      if (value !== val) { 
        return true 
      }
      else { 
        throw "Equal"
      }
    }
  }
  return obj;
};