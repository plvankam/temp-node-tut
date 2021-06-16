const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first  = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log('done with this task')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result:\n ${first}\n${second}`
)

console.log('starting the next one')
