function dosomething(evt){
   console.log("screen: (" + evt.screenX + "," + evt.screenY +"), page: (" + evt.pageX+ ","+ evt.pageY +")");
}

addEventListener('click', dosomething);
