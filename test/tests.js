import { checkForMatch } from '../utils.js';

const test = QUnit.test;

test('check if user in put is lower than correct number and returns -1', (expect) => {
    const expected = -1 ;  
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = checkForMatch(1, 2);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('check if user input matches the correct number and returns 0', (expect) => {
    const expected = 0;  
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = checkForMatch(2, 2);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('check if user in put is higher than correct number and returns 1', (expect) => {
    const expected = 1 ;  
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = checkForMatch(2, 1);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
