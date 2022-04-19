let sidebar=document.querySelector('.sidebar')

const gameImages=document.querySelector('.game-images')
const btnImg=document.querySelectorAll('.game-img')
const backGround=document.getElementById('background')


sidebar.addEventListener('mouseenter',function(){
    sidebar.classList.add('active')
    sidebar.addEventListener('mouseleave',function(){
        sidebar.classList.remove('active')
    })
    })
    


btnImg.forEach(function(el){
    el.addEventListener('click',function(){
        gameImages.querySelector('.actives').classList.remove('actives');

        el.classList.add('actives')
    })
})

let realImage=document.getElementById('realImage');

btnImg.forEach(function(el){
    el.addEventListener('click',function(e){
         let button=e.currentTarget.dataset.id
       if(button==='fire'){
        realImage.src='img/fireeee.jpg'
         realImage.id='realImage'
       }
      else if(button==='gun'){
        realImage.src='img/gun.jpg'
        realImage.id='gun'
       }
      else if(button==='death'){
        realImage.src='img/death.jpg';
        realImage.id='death'
       }
    })
})
let gameBackground=document.querySelector('.game-background')
let gameBackground2=document.querySelector('.game-background-2')
let gameBackground3=document.querySelector('.game-background-3')

realImage.addEventListener('click',function(e){
const cancelButton=document.querySelector('.bxs-x-circle')
let id=e.currentTarget.id

cancelButton.addEventListener('click',function(){
    gameBackground.classList.remove('game-background-open');
    
})

if(id==='death'){
    gameBackground2.classList.add('open-game-background-2')
}
else if(id==='realImage'){
    gameBackground.classList.add('game-background-open');
    
}
else if(id==='gun'){
    gameBackground3.classList.add('open-game-background-3')
}

})
    
cancelButton2=document.querySelector('.cnlbtn').addEventListener('click',function(){
    gameBackground2.classList.remove('open-game-background-2')
})

cancelButton3=document.querySelector('#cancel3').addEventListener('click',function(){
    gameBackground3.classList.remove('open-game-background-3')
})

const download =document.querySelector('.btn-1')
const download1 =document.querySelector('.btn-2')
const download2 =document.querySelector('.btn-3')
const download3 =document.querySelector('.btn-4')

 document.querySelector('.donbtn-1').addEventListener('click',function(){
  download.classList.toggle('play-btn')
})
    
document.querySelector('.donbtn-2').addEventListener('click',function(){
  download1.classList.toggle('play-btn')
})
    
document.querySelector('.donbtn-3').addEventListener('click',function(){
  download2.classList.toggle('play-btn')
})
    
document.querySelector('.donbtn-4').addEventListener('click',function(){
  download3.classList.toggle('play-btn')
}) 
    
document.querySelector('.bx-menu').addEventListener('click',function(){
   sidebar.classList.toggle('open-sidebar')
})







 

