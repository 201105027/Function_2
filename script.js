// function bubbleSort(arr) {
//     let length = arr.length
//     let type;
    
// do {
//     type = false;
      
//     for (let i = 0; i < length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         let chek = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = chek
//         swapped = true
//     }
//     }
// } while (swapped);
//     return arr;
// }

// let arr = [2, 1, 5, 10, 9, 8]
// console.log(bubbleSort(arr));

function id(length) {
  let oper = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let random = '';
  for (let i = 0; i < length; i++) {
    let ind = Math.round(Math.random() * (oper.length - 1));
    random += oper.charAt(ind);
  }
  return random;
}

let rand = id(10);
console.log(rand);
  