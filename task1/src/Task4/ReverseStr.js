
const str = "hello";


const reverseStr = (str) => {
let reverseStr = ""

    for(let i= str.length -1; i >= 0;i--){
  reverseStr += str[i]
    }
return reverseStr

}

const reverseStr2 = (str) => {

return str.split("").reverse().join("")

}


console.log(reverseStr(str))
console.log(reverseStr2(str))