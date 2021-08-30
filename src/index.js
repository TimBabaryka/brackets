module.exports = function check(str, bracketsConfig) {
let count =0;
let count2 =0;
let count3 =0;
let count4 =0;



for ( let i =0; i< str.length;i++) {
    if (str[i] == '(') {
        count++
    } if (str[i] == ')') {
        count--
    } if (count < 0) {
        break;
    }


    if (str[i] =='[') {
        count2++
    } if( str[i] == ']') {
        count2--
    } if (count2 < 0) {
        break;
     }

     if (str[i] =='<') {
        count3++
    } if( str[i] == '>') {
        count3--
    } if (count3 < 0) {
        break;
     }

     if (str[i] =='{') {
        count4++
    } if( str[i] == '}') {
        count4--
    } if (count4 < 0) {
        break;
     }
}



if ((count + count2 + count3 + count4) !=0){
  return false
} else {
  return true
}






}
