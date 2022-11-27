let wraper = document.querySelectorAll('.wraper')
let caret = document.querySelectorAll('.caret')
let wraperList = document.querySelectorAll('.wraperList');
let chack = true
wraper.forEach((el,i) => {
   
    el.addEventListener('click',()=>{
        if(chack == true){
            wraperList[i].style.color = '#2D99CC'
            caret[i].style.rotate = '0deg'
            wraper[i].style.height = '150px'
            chack = false
        }else{
            caret[i].style.rotate = '90deg'
            wraper[i].style.height = '40px'
            wraperList[i].style.color = 'black'
            chack = true
        }
    })
})

