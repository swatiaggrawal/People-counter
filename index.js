let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
function Increment(){
    
    count+=1
    countEl.textContent=count
    
}
function save(){
    let countValue=count+" - "
    saveEl.textContent+=countValue
    countEl.textContent=0
    count=0
    
}