var timeLimit = function(fn, t) {
  return async function(...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    try {
      const result = await Promise.race([fn(...args), timeoutPromise]);
      
      return result;
    } catch (error) {
      throw error;
    }
  };
};