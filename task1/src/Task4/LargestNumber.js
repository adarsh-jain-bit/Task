
let arr = [2,44,12,344,12,11,234,22]


const LargestNumber = (arr) => {

    let largest = arr[0]
 for(let i=1; i < arr.length;i++){
  if(arr[i] > largest){
    largest = arr[i]
  }
 }
 
 return largest

}


console.log(LargestNumber(arr))