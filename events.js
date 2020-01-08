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

   // which character was pressed
         addEventListener('keypress', function(evt){
            console.log("You pressed the "+ String.fromCharCode(evt.charCode) + " character");
         })
         addEventListener('keydown', function(evt){
            if(evt.keyCode === 32) console.log("fire!");
         })

         const once = document.getElementById('once');

      once.addEventListener('click', remove);

      function remove(evt){
         console.log("it want last!");
         once.style.backgroundColor = "yellow";
         once.removeEventListener('click', remove);
      }

  const broken = document.getElementById('broken');
  broken.addEventListener('click', function(evt){
     evt.preventDefault();
     console.log("Link is broken!");
  })

  const list = document.getElementById('list');
  const li = document.querySelector("#list li");

/*  
//capturing
     // list
       list.addEventListener("click", function(evt){
          console.log("clicked on list");
       }, true);
     // li
         li.addEventListener('click', function(evt){
         console.log("clicked on li");
      }, true);

  //bubbling 
    //list
      list.addEventListener('click', function(evt){
         console.log("clicked on list");
     });

      //li 
        li.addEventListener('click', function(evt){
           console.log("clicked on  li");
        });
   */
list.addEventListener('click', function(evt){
   console.log("click on list!");
});
li.addEventListener('click', function(evt){
   console.log('clicked on li again!');
   evt.stopPropagation(); // stop bubbling from occurring...'click on list' wont show
});


list.addEventListener('click', highlight);
