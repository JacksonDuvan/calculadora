
const borrar = document.getElementById('borrar')


const element = document.getElementById('element')


function numbers(num){
	let resultado = element.innerHTML
  let number = num.innerHTML
  document.getElementById('element').innerHTML = resultado + num
  element.classList.add('number')
}


function result(){
	let actual = element.innerHTML
	let mul = actual.indexOf('x')
	let sum = actual.indexOf('+')
	let res = actual.indexOf('-')
	let div = actual.indexOf('/') 
   if (mul !== -1) {
   	    let arr = actual.split('x',2)
        let resp = parseInt(arr[0]) * parseInt(arr[1])
        element.innerHTML = resp
   }else if(sum !== -1){
   	    let arr = actual.split('+',2)
        let resp = parseInt(arr[0]) + parseInt(arr[1])
        element.innerHTML = resp
   }else if(res !== -1){
   	    let arr = actual.split('-',2)
   	    let resp = parseInt(arr[0]) - parseInt(arr[1])
   	    element.innerHTML = resp
   }else if(div !== -1){
   	    let arr = actual.split('/',2)
   	    let resp = parseInt(arr[0]) / parseInt(arr[1])
   	    element.innerHTML = resp
   }
}

igual.addEventListener('click', result)
borrar.addEventListener('click', () =>{
    element.innerHTML = "" 
}) 


