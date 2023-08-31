const del=document.querySelectorAll('#delete');
const btnplus=document.querySelectorAll('#plus');
const btnmoin=document.querySelectorAll('#moins');
const price=document.querySelectorAll('#price');
const quan=document.querySelectorAll('#quantities');
const total_price =document.querySelector("#tot_pri")
const heart =document.querySelectorAll('#heart')
const card=document.querySelectorAll(".card")
//this function to calculate totale price
function total (){
    var s=0
 for (let i = 0; i < price.length; i++) {
    s=s+quan[i].innerHTML*price[i].innerHTML
    
 }
 total_price.innerHTML=s
 return total_price
}
// here to add event on clicking plus or mince
for (let i = 0; i < btnplus.length; i++) {
    btnplus[i].addEventListener("click",function add(){
        quan[i].innerHTML++
        return total()
        
    })
    btnmoin[i].addEventListener("click",function less(){
        
        if (quan[i].innerHTML>0){ quan[i].innerHTML--}
        return total()
    })
    heart[i].addEventListener("click",function color() {
        if(heart[i].style.backgroundColor==="red"){heart[i].style.backgroundColor="white"}
        else {heart[i].style.backgroundColor="red"}
    })
    del[i].addEventListener('click',function remove() {
        card[i].remove()
        quan[i].innerHTML=0

        return total()
    })
    card[i].addEventListener('mouseover',function chang(e) {
        card[i].style.backgroundColor="#69defca9"
    })
    card[i].addEventListener('mouseout',function chang(e) {
        card[i].style.backgroundColor="#fff"
    })
    
}




