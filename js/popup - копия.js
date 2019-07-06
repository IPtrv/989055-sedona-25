  var open = document.querySelector(".button-search");
  var popup = document.querySelector(".modal-search-wrapper");
  var date = document.querySelector("[name=date]");
  var number = document.querySelector("[name=number]");
  var form = popup.querySelector("form");

    open.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    date.focus();
   });

   window.addEventListener("keydown", function (evt) {
     if (evt.keyCode === 27) {
       evt.preventDefault();
         popup.classList.add("modal-close");
       }
     });

   form.addEventListener("submit", function (evt) {
    if (!date.value || !number.value) {
     evt.preventDefault();
    console.log("Нужно заполнить поля");
  }
  });
