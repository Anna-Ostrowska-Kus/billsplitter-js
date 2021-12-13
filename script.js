const total = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const count = document.querySelector('.count')
const cost = document.querySelector('.cost')
const info = document.querySelector('.cost-info')
const error = document.querySelector('.error')

const shareBill = ()=>{
    if(total.value!="" && people.value!=""){
    
        cost.textContent = (parseInt(total.value)+parseInt(total.value)*parseFloat(tip.value))/parseInt(people.value)
        info.style.display = 'block'
        error.style.display = 'none'
    }else {
        info.style.display = 'none'
        error.textContent = "Fill all empty fields"
    
    }

 
}



    count.addEventListener('click', shareBill)



