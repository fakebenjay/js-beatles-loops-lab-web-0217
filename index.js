function theBeatlesPlay(lads, instruments) {
  var sentence = []
  for (var i = 0; i < lads.length; i++) {
    sentence.push(`${lads[i]} plays ${instruments[i]}`)
  }
  return sentence
}

function johnLennonFacts(facts) {
  var n = facts.length
  var array = []
  while (n > 0) {
    array.unshift(`${facts[n-1]}!!!`)
    --n
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    ++n
  } while (n < 15);
  return array
}
