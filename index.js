function receivesAFunction(callbackFunction){
callbackFunction()
}
function returnsANamedFunction() {
    return function aNamedFunction() {
        console.log('This function has a name');
    };
}
function returnsAnAnonymousFunction() {
    return () => console.log('this is an anonymous function')
    }
