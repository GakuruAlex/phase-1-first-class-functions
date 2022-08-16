function receivesAFunction(cb){

return cb();
}

function returnsANamedFunction(cb){
var cb= function namedFunction(){

}

    return cb;
}

function returnsAnAnonymousFunction(){


return (cb)=>(cb);
}
