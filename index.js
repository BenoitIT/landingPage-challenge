let closeBtn=document.querySelector('.close');
let humburgBtn= document.querySelector('.humburg');
let menus=document.querySelector('.smMenu');
humburgBtn.addEventListener('click',function(){
    humburgBtn.classList.add('noneDisplay');
   humburgBtn.classList.remove('humburg');
   closeBtn.classList.add('setVisible');
   closeBtn.classList.remove('close');
   menus.classList.add('menuDisplay');
   menus.classList.remove('smMenu');
});
closeBtn.addEventListener('click',function(){
    humburgBtn.classList.add('humburg');
   humburgBtn.classList.remove('noneDisplay');
   closeBtn.classList.add('close');
   closeBtn.classList.remove('setVisible');
   menus.classList.add('smMenu');
   menus.classList.remove('menuDisplay');
});