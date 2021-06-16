// GLOBALS - NO WINDOW!!!

// __dirname  - path to current console.dir();
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
console.log(module)
console.log(__filename)
setInterval(() => {
    console.log(`hello world`)
}, 1000)
