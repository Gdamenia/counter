let number = document.querySelector('h2')
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')

let count = 0

inc.addEventListener(`click` , () => {
    number.innerHTML = count+=1
})

res.addEventListener(`click` , () => {
    count = 0
    number.innerHTML = count
    
})

dec.addEventListener(`click` , () => {
    number.innerHTML = count-=1
})