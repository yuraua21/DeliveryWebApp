let popuplink = document.querySelectorAll(".popup_link");
let body = document.querySelector("body");
let popup = document.querySelector("popup");

if (popuplink.length > 0 ) {
    for(let i = 0; i < popuplink.length; i+=1){
    popupLINK = popuplink[i];
  popupLINK.addEventListener ("click", function(e) {
        let popupname = document.getElementsByClassName("popup_link")
        let curentpopup = document.getElementById("popup");
        
        popupOpen(curentpopup);
        e.preventDefault;
      });
    }
    }
    function popupOpen(curentpopup){
       curentpopup.classList.add("open");
    }
    
    let popclose = document.querySelectorAll(".close-popup");
    if (popclose.length > 0) {
    for (let i = 0; i < popclose.length; i+=1){
     let funpop = popclose[i];
     funpop.addEventListener("click" , function (p){
       popupClose(funpop.closest(".popup"));
       p.preventDefault;
        });
    }
    }
    function popupClose(winpopup) {
      winpopup.classList.remove("open");
     }


     let butlog = document.querySelector(".fetlog");
     let inputName = document.querySelector("#logpup");
     let inputPass = document.querySelector("#puppass");

     
     
butlog.addEventListener("click" , function(){
       
       localStorage.setItem( "Логін" , inputName.value);
       localStorage.setItem("Пароль" , inputPass.value);
       
       
});


let login = document.querySelector(".loginput2");
let logtext = document.querySelector(".popuplogin");
let userName = document.querySelector(".user-name");
let boxt = document.querySelector(".text03");
let popup2 = document.querySelector(".popup");
let popupexit = document.querySelector(".popupexit");
let closeexitpop = document.querySelector(".hertt");



butlog.addEventListener("click" , function(){
    
    localStorage.getItem("Логін" , inputName.value);
    userName.textContent = inputName.value ;
    userName.style.display = "inline-block";
    popup2.classList.remove("open");
    popupexit.classList.add("logopen");
});


 

boxt.addEventListener("click" , function(){
    boxt.classList.add("close");

});



closeexitpop.addEventListener("click", function(){
      popupexit.classList.remove("logopen");
      boxt.classList.remove("close");
      localStorage.clear();
      userName.textContent = "";
})

let popuplink_a = document.querySelector(".popupvid");
let popup_a = document.querySelector(".popup_a");
let popuplose = document.querySelector(".close-pop_a");

popuplink_a.addEventListener("click" , function(){
      popup_a.classList.add("open_a");
      openCart(popup_a);
      
});


popuplose.addEventListener("click" , function(){
      popup_a.classList.remove("open_a");
});


let itembox = document.querySelectorAll(".item-box");
let cartCont = document.getElementById("cart_content");



function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
};

function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
};

function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false
};

for(var i = 0; i < itembox.length; i++){
	addEvent(itembox[i].querySelector('.add_item'), 'click', addToCart);
}

function addToCart(e){
    this.disabled = true;
    let parentBox = this.parentNode;
    let cartData  = getCartData()|| {} ;
    let  itemId = this.getAttribute('data-id'); 
		let itemTitle = parentBox.querySelector('.item_title').innerHTML;
		let itemPrice = parentBox.querySelector('.item_price').innerHTML;
    if(cartData.hasOwnProperty(itemId)){ 
      cartData[itemId][2] += 1;
    } else { 
      cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    if(!setCartData(cartData)){ 
      this.disabled = false; 
      cartCont.innerHTML = 'Товар доданий в корзину';
      setTimeout(function(){
        cartCont.innerHTML = 'Продовжити покупки';
      }, 1000);
    }
    return false;
  }


  function openCart(e){
	
    let cartData = getCartData();
        totalItems = '';
    console.log(JSON.stringify(cartData));
    
    if(cartData !== null){
      totalItems = '<table class="shopping_list">  <tr>  <th> Назва товару</th>   <th>  Ціна   </th>   <th>  К-сть  </th>  </tr>';
      for(let items in cartData){
        totalItems += '<tr>';
        for(let i = 0; i < cartData[items].length; i++){
          totalItems += '<td>' + cartData[items][i] + '</td>';
        }
        totalItems += '</tr>';
      }
      totalItems += '<table>';
      cartCont.innerHTML = totalItems;
    } else {
      
      // cartCont.innerHTML = 'В корзине пусто!';
    }
    return false;
  }

  // addEvent(d.getElementById('checkout'), 'click', openCart);

 let addtokor = document.querySelector(".add_item");