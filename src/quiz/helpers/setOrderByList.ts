

export const setOrderByList = ( array: Array<any> ) => {

    let nesArray = [ ...array ];

    for ( let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * (i + 1));
        
        [ nesArray[i], nesArray[j] = nesArray[j], nesArray[i] ];
    }

    return nesArray;
}