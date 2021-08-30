let input = '[(])'

let count = 0;
let count2 = 0;
let count3 =0;
let count4 =0;



for ( let i =0; i< input.length;i++) {
    if (input[i] == '(') {
        count++
    } if (input[i] == ')') {
        count--
    } if (count < 0) {
        break;
    }


    if (input[i] =='[') {
        count2++
    } if( input[i] == ']') {
        count2--
    } if (count2 < 0) {
        break;
     }


     if (input[i] =='<') {
        count3++
    } if( input[i] == '>') {
        count3--
    } if (count3 < 0) {
        break;
     }

     if (input[i] =='{') {
        count4++
    } if( input[i] == '}') {
        count4--
    } if (count4 < 0) {
        break;
     }
}



if (count !=0){
    console.log(false)
} else {
    console.log(true)
}

if (count2 !=0){
    console.log(false)
} else {
    console.log(true)
}

if (count3 !=0){
    console.log(false)
} else {
    console.log(true)
}

if (count4 !=0){
    console.log(false)
} else {
    console.log(true)
}
  
  