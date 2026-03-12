
const arr = [1,22,33,22,44,22,33,12,54,1,33,4455,6, 4]


const removeDuplicate = arr.filter((val , index , array) => array.indexOf(val) == index  )

console.log(removeDuplicate)