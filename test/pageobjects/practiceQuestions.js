//function to print "Hello World" without using 
function f()
{
    return String.fromCharCode(72,101,108,108,111,44,32,119,111,114,108,100,33);
}
console.log(f());


//function to multiply two numbers without using * operator
function multiply(num, times)
{
    var n = num;
    for(var i = 1; i < times; i++)
        num += n;
    return num;
} 
console.log(multiply(5,2))


//
let arr=['a','b','c']
const a=arr.join("\n")
console.log(a)   
console.log(typeof(arr))
console.log(typeof(a))
