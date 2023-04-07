let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// Given a list of N integers sorted in ascending order, Please find the number which occurs 4 times in the array


let n = parseInt(readLine());
let a = [];
let count =1;
let res =-1;
for(let i = 0;i<n; i++){
    a.push(parseInt(readLine()))
}
// console.log(a)
for (let i = 0; i<n; i++){
    if (a[i]==a[i-1]){
        count++;
        // console.log(count);
  } else {
        if(count===4){
            res = a[i-1]
            // console.log(res)
            break;
           
        }
    }
 if(res === -1 && count===4){
    res= a[n-1]

    // console.log(res)
 }

}
console.log(res)
