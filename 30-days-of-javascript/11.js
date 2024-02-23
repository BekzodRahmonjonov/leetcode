function memoize(fn) {
  let cache = new Map()
  return function(...args) {
    let key = JSON.stringify(args)
    if (!cache.has(key)) { 
      cache.set(key,fn(...args))
    }
    return cache.get(key)
  }
}