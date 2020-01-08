function dosomething(evt){
   console.log("screen: (" + evt.screenX + "," + evt.screenY +"), page: (" + evt.pageX+ ","+ evt.pageY +")");
}
function whichButton(evt){
   console.log(evt.which);
}
// addEventListener('click', dosomething);
//addEventListener('click', whichButton);

const click = document.getElementById('click');
const dbclick = document.getElementById('dbclick');
const mouse = document.getElementById('mouse');

// describe the whole click 'cycle'
   click.addEventListener('mousedown', function(){
      console.log('down');
   });
   click.addEventListener('click', function(){
      console.log('click');
   });
   click.addEventListener('mouseup', function(){
      console.log('up');
   });
   dbclick.addEventListener('dblclick', highlight);

   function highlight(evt){
      evt.target.classList.toggle('highlight');
   }

   mouse.addEventListener('mouseover', highlight);
   mouse.addEventListener('mouseout', highlight);