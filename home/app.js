let food = [
    ['../img/gallery/01','Fusce dictum finibus','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'salad','all'],
    ['../img/gallery/02','Aliquam sagittis','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'noodel','all'],
    ['../img/gallery/03','Sed varius turpis','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'salad','all'],
    ['../img/gallery/04','Aliquam sagittis','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'noodel','all'],
    ['../img/gallery/05','Maecenas eget justo','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'salad','all'],
    ['../img/gallery/06','Quisque et felis eros','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'noodel','all'],
    ['../img/gallery/07','Sed ultricies dui','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'salad','all'],
    ['../img/gallery/08','Donec porta consequat','Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',55,'noodel','all']
]

let ingridient = document.getElementById('ingridient')
ListFood(food,5,'all',ingridient);
let list = document.querySelectorAll('.lista');
list.forEach(el => {
    el.addEventListener('click',()=>{
        list.forEach(el => el.className = 'lista')
        if(el.innerText == "Pizza"){
            el.className += ' ahover';
            ingridient.innerText = '';
            ListFood(food,5,'all',ingridient);
        }else if(el.innerText == "Salad"){
            el.className += ' ahover';
            ingridient.innerText = ''
            ListFood(food,4,'salad',ingridient)
        }else if(el.innerText == "Noodle"){
            el.className += ' ahover';
            ingridient.innerText = ''
            ListFood(food,4,'noodel',ingridient)
        }
    })
})
let dol = document.getElementById('many').innerText
function ListFood(array,num,val,set,many){
    array.forEach(el => {
        if(el[num].includes(val)){
            let div = document.createElement('div')
            div.className = 'eat'
            let imgBlock = document.createElement('div')
            imgBlock.className = 'imgBlock'
            let img = document.createElement('img')
            img.className = 'photo1'
            img.src = el[0] + '.jpg'
            imgBlock.append(img)
            let buyHead = document.createElement('div')
            buyHead.className = 'foodBlock'
            let buy = document.createElement('input')
            buy.type = 'button'
            buy.className = 'buyFood'
            buy.value = 'Գնել'
            buy.addEventListener('click',()=>{
                dol.innerText = +dol.innerText - +el2
            })
            buyHead.append(buy)
            imgBlock.append(buyHead)
            div.append(imgBlock)
            let h4 = document.createElement('h4')
            h4.className = "eath"
            h4.innerText = el[1]
            div.append(h4)
            let p = document.createElement('p')
            p.className = 'eatp'
            p.innerText = el[2]
            div.append(p)
            let h1 = document.createElement('h1')
            h1.className = 'eatvalue'
            h1.innerText = el[3]
            div.append(h1)
            set.append(div)
        }
    })
}



