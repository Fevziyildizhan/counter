// css
 body{
       background-color: #333232;
     }
     #container{
       height: 200px;
       width: 500px;
       border: 10px solid #926981;
       margin: 50px auto;
       background-color: #888169;
     }
     h1 {
       text-align: center;
       color: white;

     }
     #number{
       height: 25px;
       width: 250px;
       margin: auto;
       margin-top: 50px ;
       border: 1px solid black;
       text-align: center;
       background-color: white;

     }
     #increment{
       height: 25px;
       width: 100px;
       margin-top: 50px;
       margin-left: 125px;

     }
     #decrement{
      height: 25px;
       width: 100px;
       margin-top: 50px;
       margin-left: 50px;

     }
     
     
     //HTML
     <h1>Counter</h1>
<div id="container">
  <div id="number">0</div>
  <button id="increment">+</button><button id="decrement">-</button>
</div>


//script

let add = document.getElementById('increment')
let remove = document.getElementById('decrement')
let int = document.getElementById('number')

let integer = 0
add.addEventListener('click',function(){
  integer+= 1
  int.innerHTML= integer
})

remove.addEventListener('click',function(){
  integer-=1
  int.innerHTML= integer
})
