let element=document.getElementById('table')


function abc() {
    element.innerHTML=''
    let number= document.getElementById('number').value
    
    for (let y=1; y<11; y++){
        element.innerHTML+=`${number} x ${y} = ${y*number} <br>`
        
    }
}
let element1=document.getElementById('hello')
function bilal() {
    element1.innerHTML=''
    let number= document.getElementById('onchange').value
    
    for (let y=1; y<11; y++){
        element1.innerHTML+=`${number} x ${y} = ${y*number} <br>`
        
    }
}
let print1=document.getElementById('printhere')
function aoa() {
    print1.innerHTML=''
    let start=parseInt(document.getElementById('starting').value)
    let end=parseInt(document.getElementById('ending').value)
    let marci=parseInt(document.getElementById('oftable').value)
    
    for (let c = start; c <=end; c++) {
        print1.innerHTML+=`${marci} x ${c} = ${marci*c} <br>`
        
    }
  
}