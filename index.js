let contanier= document.querySelectorAll('.contanier img ')
contanier.forEach(function(e){
e.onmouseover = function(){
console.log(e)
e.classList.add('active')
}
e.onmouseout=function(){
    e.classList.remove('active')

}
})

