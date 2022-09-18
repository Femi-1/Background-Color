let btn  = document.getElementsByClassName("btn")[0]
let arr =['yellow','red','brown','pink','green','purple']




// btn.addEventListener('click',()=>{
//     document.body.style.backgroundColor = arr[0]
// })

btn.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random()*6)
    document.body.style.backgroundColor = arr[randomNumber]
    console.log(randomNumber);
})
console.log(randomNumber);




