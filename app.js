console.log('KnowYourDevice')
console.log(process.argv[2])
const device = {Device: 'Samsung', Model:'Note9'}
setTimeout(() => {
    console.log('2 Second Timer called')
}, 20000)
console.log(JSON.stringify(device))
const parse =JSON.parse(JSON.stringify(device))
console.log(parse.Model)
