var formOpen = document.querySelector(".contacts-btn");
var formPopup = document.querySelector(".write-us-modal");
var formClose =  document.querySelector(".form-close");
var userName = document.querySelector("[name=name]");
var userMail = document.querySelector("[name=email]");
var form = document.querySelector(".write-us-form");
var storage = localStorage.getItem("userName");

if (formOpen) {
  formOpen.addEventListener("click", function(event){
    event.preventDefault();
    formPopup.classList.add("write-us-modal-show");
    console.log("Форму открыть");
    if (storage) {
      userName.value = storage;
      userMail.focus();
    } else {
    userName.focus();
    }
  });
}

if (formClose) {
  formClose.addEventListener("click", function(event){
    event.preventDefault();
    formPopup.classList.remove("write-us-modal-show");
    formPopup.classList.remove("write-us-modal-error");
});
}

if (form) {
  form.addEventListener("submit",function(event){if (!userName.value || !userMail.value){event.preventDefault();
    formPopup.classList.add("write-us-modal-error");
    }
   else {localStorage.setItem("userName", userName.value);
    }
  });
}

window.addEventListener("keydown",function(event){
  if(event.keyCode === 27) {
    if( formPopup.classList.contains("write-us-modal-show"))
      {
        formPopup.classList.remove("write-us-modal-show");
        formPopup.classList.remove("write-us-modal-error");
      }
  }
});

var mapOpen = document.querySelector(".map-open");
var mapPopup = document.querySelector(".map-popup-modal");
var mapClose = document.querySelector(".map-close");

if (mapOpen) {
  mapOpen.addEventListener("click", function (event){
    event.preventDefault();
    mapPopup.classList.add("map-modal-show");
  });
}

if (mapClose) {
  mapClose.addEventListener("click", function(event){
    event.preventDefault();
    mapPopup.classList.remove("map-modal-show");
  });
}

var cartBuy = document.querySelectorAll(".buy-btn");
var cart = document.querySelector(".cart-modal");
var cartClose = document.querySelector(".cart-close");

if (cartBuy) {
  for (var i = 0; i < cartBuy.length; i++) {
    cartBuy[i].addEventListener("click", function(event){event.preventDefault();
      cart.classList.add("cart-modal-show");
    });
  }
}

if (cartClose) {
  cartClose.addEventListener("click", function(event){event.preventDefault();
    cart.classList.remove("cart-modal-show");
  });
}
