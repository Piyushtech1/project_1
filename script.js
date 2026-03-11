const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

nav.classList.toggle("active");

});


//work place

const buttons = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".portfolio-item");

buttons.forEach(btn => {

btn.addEventListener("click", ()=>{

document.querySelector(".active").classList.remove("active");

btn.classList.add("active");

const filter = btn.dataset.filter;

items.forEach(item=>{

if(filter === "all"){

item.style.display = "block";

}

else{

if(item.classList.contains(filter)){

item.style.display = "block";

}

else{

item.style.display = "none";

}

}

});

});

});


// contact form

(function(){
emailjs.init("mawlRPfq_knqWSX8Q");
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_0u9f4xu",
"template_yecl3tz",
form
).then(() => {

alert("Message sent successfully!");
form.reset();

}).catch((error) => {

console.error("EmailJS error:", error);
alert("Failed to send message");

});

});


//work for phone
