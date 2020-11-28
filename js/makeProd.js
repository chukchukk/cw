var json = JSON.parse(localStorage.getItem("current"));
// alert(json.price);

var img = document.getElementById("img_prod");
img.src = json.img;

var author = document.getElementById("text_author");
author.innerHTML = json.author;

var title = document.getElementById("text_title");
title.innerHTML = json.title;

var price = document.getElementById("price");
price.innerHTML = json.price + " р.";

var description = document.getElementById("description");
description.innerHTML = json.description;

var buy_btn = document.getElementById("buy_btn");
buy_btn.name = json.position;

document.title = json.author + " " + json.title;