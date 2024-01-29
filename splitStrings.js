/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

Examples:

'abc' =>  ['ab', 'c_']
'abcdef' => ['ab', 'cd', 'ef']
*/

function splitString(str) {
    const result = []
    for (let i = 0; i < str.length; i += 2) {
        result.push(str.slice(i, i+2))
    }

    if (result.length !== 0) {
        result[result.length - 1] = result[result.length - 1].padEnd(2, '_')
    }

    return result
}