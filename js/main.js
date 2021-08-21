
//tini slider
const slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
  });
  document.querySelector('.slider-left').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.slider-right').onclick = function () {
    slider.goTo('next');
  };

  const tables  = document.querySelectorAll('.tabs__table');
  const btnTable = document.querySelectorAll('.table-table');
  const tableInner  = document.querySelectorAll('.tabs__inner');

  let hideTabsContent = () => {
      tables.forEach((item)=>{
        item.classList.remove('tabs__active');
      })
      tableInner.forEach((item)=>{
        item.classList.remove('active')
      })
  }
  let opensContent = (i = 0) =>{
    tables[i].classList.add('tabs__active');
    tableInner[i].classList.add('active');
  }
  hideTabsContent();
  opensContent();
  

  tables.forEach((item)=>{
    item.addEventListener('click', (e) =>{
      const target = e.target;
        if(target && target.classList.contains('table-table')){
            btnTable.forEach((it,i)=>{
            if(target == it){
             hideTabsContent();
             opensContent(i);
            }
          })
        }
     })
  })
  
 /*  tabs */
 let link  = document.querySelectorAll('.tabs-card-next a');
 let linkBack  = document.querySelectorAll('.tabs-card-back a');
 let CartNext  = document.querySelectorAll('.tabs-card-content');
 let CartBack  = document.querySelectorAll('.tabs-card-benefits');

 link.forEach((item,i) => {
   item.addEventListener('click', (e)=>{
    let target = e.target;
    e.preventDefault()
     if(target == item){
       CartNext[i].classList.remove('active');
       CartBack[i].classList.add('active');
     }
   })
 }) 
 linkBack.forEach((item,i) => {
  item.addEventListener('click', (e)=>{
   let target = e.target;
   e.preventDefault()
    if(target == item){
      CartBack[i].classList.remove('active');
      CartNext[i].classList.add('active');
    }
  })
}) 
/* model */
let btnHead = document.querySelectorAll('.header-button');
let modelHeader = document.querySelector('.model__inner-item-1');
let modelTabsBlock = document.querySelector('.model__inner-item-2');
let modelGratitude = document.querySelector('.model__inner-item-3');
let modelClouse = document.querySelectorAll('.model__close');
let modelFirstInpt =  document.querySelectorAll('.model-first-inpt');
let modelFirstBtn =  document.querySelector('.model-first-btn');
let consultationBtn =  document.querySelector('.consultation-btn');
let consultationInpt =  document.querySelectorAll('.consultation-inpt');
let modelMistake = document.querySelector('.model__mistake');
let modelMistakeBlock = document.querySelector('.model__mistake-block');
let consultationMistake = document.querySelector('.consultation__mistake');
let tabsBstn =  document.querySelectorAll('.tabs__btn');
let modelBuyGoodsInpt =  document.querySelectorAll('.model__buy-goods-inpt');
let modelBuyGoodsBtn =  document.querySelector('.model__buy-goods-btn');


btnHead.forEach((item)=>{
  item.addEventListener('click', ()=>{
    modelHeader.style.display='block';
  })
})
  modelClouse.forEach((item)=>{
    item.addEventListener('click', ()=>{
      modelHeader.style.display='none';
      modelGratitude.style.display='none';
      modelTabsBlock.style.display='none';
      modelMistake.style.display   = 'none';
  })
}) 


function validateEmail(email){
    let emaiL =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;;
    return emaiL.test(email);
}
modelFirstBtn.addEventListener('click', (e)=>{
    for(let i = 0; i < 2; i++){
      if (validateEmail(modelFirstInpt[2].value) && modelFirstInpt[i].value !== ''&&
          modelFirstInpt[i].value.length > 1){
                modelGratitude.style.display = 'block'
                modelHeader.style.display = 'none'
                modelMistake.style.display = 'none'
          }else{
            modelGratitude.style.display = 'none'
            modelHeader.style.display = 'block'
            modelMistake.style.display = 'block'
            e.preventDefault()
            
      }
   }
})


consultationBtn.addEventListener('click',(e)=>{
  for(let i = 0; i < 2; i++){
//////проверку на импут ////// 2 проверка на регулярку 
if (validateEmail(consultationInpt[2].value) && consultationInpt[i].value !== ''&&
    consultationInpt[i].value.length > 1){
        modelGratitude.style.display = 'block'
        consultationMistake.style.display = 'none'
}else{
        modelGratitude.style.display = 'none'
        consultationMistake.style.display = 'block'
        e.preventDefault()    
     }
   }
})

tabsBstn.forEach((item)=>{
  item.addEventListener('click', ()=>{
    modelTabsBlock.style.display = 'block';
  })
})

 modelBuyGoodsBtn.addEventListener('click', (e)=>{
   for(let i = 0 ; i < 2 ; i++){
    if(validateEmail(modelBuyGoodsInpt[2].value) && modelBuyGoodsInpt[i].value !== ''&&
       modelBuyGoodsInpt[i].value.length > 1){
       modelTabsBlock.style.display = 'none'
       modelMistakeBlock.style.display = 'none'
       modelGratitude.style.display = 'block'
    }else{
       modelGratitude.style.display = 'none'
       modelTabsBlock.style.display = 'block'
       modelMistakeBlock.style.display = 'block' 
       e.preventDefault()
     } 
    }
   }) 
//scrolling
let anchors = document.querySelectorAll('a[href*="#tabs"]')
    for(let anchor of  anchors){
      anchor.addEventListener('click', (e)=>{
        e.preventDefault();
        let blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: 'start'
        })
      })
    }
  /* masktell */
    let element = document.querySelectorAll('#tel');
    element.forEach((item)=>{
      let maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    } 
      let mask = new IMask(item, maskOptions); 
    })
/* scroll Top*/
let topScroll = document.querySelector('.croll')
window.addEventListener('scroll', () => {
  if(window.scrollY > 1000){
    topScroll.style.display ='block'
  }else{
    topScroll.style.display ='none'
  }
});
let left = document.querySelector('.slider-left');
let right = document.querySelector('.slider-right');

window.addEventListener('scroll', (e) => {
  if(document.documentElement.clientWidth < 661){
      left.style.display = 'none'
      right.style.display = 'none'

    }else{
      left.style.display = 'block'
      right.style.display = 'block'

  }
})


