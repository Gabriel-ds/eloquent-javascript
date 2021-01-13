function reverseArray(array){
    var output = []
    for(i = array.length - 1; i >= 0; i--){
        output.push(array[i])
    }
    return output
}

console.log(reverseArray([1,2,3]))