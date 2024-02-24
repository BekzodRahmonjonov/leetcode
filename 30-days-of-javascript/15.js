var cancellable = function(fn, args, t) {
    let result = []

    result.push({ "time": 0, "returned": fn(...args) })

    let interval = setInterval(() => {
        result.push({
            time: Date.now(),
            returned: fn(...args)
        })
    }, t)
    
    function intervalFn() {
        clearInterval(interval)
        return result
    }
    return intervalFn
};
