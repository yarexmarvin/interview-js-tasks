
setTimeout(()=>{
    console.log('timeout')
}, 0);

Promise.resolve()
.then(()=>console.log('promise 3'))

console.log('console log 0 ')


let a = new Promise((res,rej)=>{
    console.log('promise1');
    res(console.log('promise2'));
})
.then(()=> console.log('then'))

console.log('console log 1')

// console.log 0,  promise1, promise2, console.log 1, promise 3,  then, timeout
// bacause PROMISE was made using NEW 