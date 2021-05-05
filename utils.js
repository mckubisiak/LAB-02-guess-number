//export { checkForMatch } from '../utils.js';


export function checkForMatch(userinput, randomnumber) {
    if(userinput > randomnumber){
        return 1;
    }
    if(userinput < randomnumber){
        return -1;
    }
    if(userinput === randomnumber){
        return 0;
    }

}


// if {
//     userGuess is equal to random# 
//     then increase win counter increase
//     display win
//     else display lose 
// }