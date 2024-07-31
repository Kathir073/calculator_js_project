const buttons=document.querySelectorAll('input[type="button"]');
const displayInput=document.getElementById("displayInput");
const operation=document.getElementById("operation");

buttons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        if (btn.value == "="){
            operation.innerHTML=displayInput.value
            displayInput.value=eval(displayInput.value)
        }else if(btn.value=="C"){
            operation.innerHTML=""
            displayInput.value=""
        }else if(btn.value=="Del"){
            displayInput.value=displayInput.value.slice(0,-1)
        }else{
            displayInput.value+=btn.value
        }
    })
})



