//Mutliplication without using multiplication operators
{
let number=4
let multiplyCount=6
let result=0;
for(let i=1;i<=multiplyCount;i++){
    result+=number
}
console.log(result);
}

//largest number without comparison operators
{
    let n1=10
    let n2=20
    let largest=((n1+n2+Math.abs(n1-n2))/2)
    console.log(largest);
}

let a=["1","2","3","4","5"]
const file=a.join("\n")
console.log(a);
console.log(file);