function countChar(string, ch){
    let cont = 0
    for(i = 0; i < string.length; i++){
        if(string[i] == ch){
            cont += 1
        } 
    }
    return cont
}

function contBs(string){
   let a = countChar(string, "B")
    return a
}

console.log(countChar("Gabriel", "l"))

console.log(contBs("bBBb"))