/*for (let n = 1; n < 101; n++){
    if(n % 3 == 0){
        console.log('Fizz')
    } else if (n % 5 == 0){
        console.log('Buzz')
    } else if (n % 3 == 0 && n % 5 == 0) {
        console.log('FizzBuzz')
    } else {
        console.log(n)
    }
}*/

for(let n = 1; n < 101; n++){
    let output = ""
    if(n % 3 == 0){
        output = "Fizz"
    }
    if(n % 5 == 0){
        output = "Buzz"
    }
    console.log(output || n)
}
