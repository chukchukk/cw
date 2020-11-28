var modal = document.getElementById('ModalID');
var btnOpen = document.getElementById("open_btn");
var span = document.getElementsByClassName("close")[0];
var btnSend = document.getElementById("send");


btnOpen.onclick = function() {
    modal.style.display = "block";
}

btnSend.onclick = function() {
    modal.style.display = "none";
    alert("Спасибо за ваш заказ. В течение 5 минут с вами свяжется наш оператор.");
    localStorage.clear();
    btnOpen.style.display = "none";
    window.location.href = "../index.html";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}