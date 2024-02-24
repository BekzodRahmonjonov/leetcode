var cancellable = function(fn, args, t) {
  let timeout
  const cancelFn = () => {
      clearTimeout(timeout)
  }

  timeout = setTimeout(() => {
      fn(...args)
  }, t)

  return cancelFn
};