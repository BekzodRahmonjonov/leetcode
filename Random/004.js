var findWordsContaining = function(words, x) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
      if (words[i].indexOf(x) != -1) {
          result.push(i)
      }
  }
  return result
};