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