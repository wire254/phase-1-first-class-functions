function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function greeting(){
        console.log("Hello World")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hello World")
    }
}


