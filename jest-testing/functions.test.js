let myFunctions = require ('./functions.js')

test('returnTwo', () => {
    expect(myFunctions.returnTwo()).toEqual(2)
})
test('greeting', () => {
    expect(myFunctions.greeting('James')).toEqual("Hello, James.")
    expect(myFunctions.greeting('Jill')).toEqual("Hello, Jill.")
})
test('add', () => {
    expect(myFunctions.add(1,2)).toEqual(3)
    expect(myFunctions.add(5,9)).toEqual(14)
})